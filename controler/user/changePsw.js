const User = require('../../model/user')
const bcrypt = require('bcrypt');
const  {encrypt} = require('../../utils/encrypter')
const {validateChangePsw} = require('../../utils/validator')
const {verifyToken} = require('../../utils/tokener')

module.exports = async ctx => {
  const {_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  let {password, password2, password3} = ctx.request.body
  const user = await User.findOne({_id})
 
  if(!user){
    ctx.status = 400  // bad request
    ctx.body ={
      message: '非法用户请求修改密码'
    }
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