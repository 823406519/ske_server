const User = require('../../model/user')
const bcrypt = require('bcrypt');
const {createToken} = require('../../utils/tokener')
  
const validateLogin = require('../../utils/validator/validateLogin')
module.exports = async ctx => {
  // 表单验证
  const error = validateLogin(ctx.request.body);
  if(error){
    ctx.status = 401;
    ctx.body = {
      message: error
    }
    return;
  }
  
  const {email, password} = ctx.request.body;

  try{
    const users =await User.find({email})
    if(!users.length){
      ctx.status = 400;
      ctx.body = {
        message: '邮箱不存在'
      }
      return
    }
    
    if(!await bcrypt.compare(password, users[0].password)){
      ctx.status = 400;
      ctx.body ={
        message: '密码错误'
      }
      return
    }

    if(users[0].status === 0){
      ctx.status = 400;
      ctx.body = {
        message: '账号尚未激活，请到邮箱进行激活'
      }
      return
    }

    //生成token
    const token = createToken({_id:users[0]._id});

    ctx.body = {
      message: '登陆成功',
      token, 
    }

  }catch(err){
    ctx.throw(500, 'server error')
  }// catch end
}
