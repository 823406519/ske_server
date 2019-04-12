const User = require('../../model/user')
const bcrypt = require('bcrypt');
const  {encrypt} = require('../../utils/encrypter')
const {validateChangePsw} = require('../../utils/validator')

module.exports = async ctx => {
  
  let {_id, password, password2, password3} = ctx.request.body
  const user = await User.findOne({_id})
 
  if(!user){
    ctx.throw(500);
    return
  }

  if(!await bcrypt.compare(password, user.password)){
    ctx.status = 400
    ctx.body ={
      message: '密码错误'
    }
    return
  }

  const error = validateChangePsw({password2, password3})
  if(error){
    ctx.status = 400
    ctx.body =  {
      message: error
    }
    return
  }

  // 修改密码
  password2 = await encrypt(password2); // 加密
  await User.findByIdAndUpdate({_id}, {password: password2})
  ctx.body ={
    message: '修改密码成功'
  }
}