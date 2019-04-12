const {verifyToken} = require('../../utils/tokener')
const User = require('../../model/user')
const {validateResetPsw} = require('../../utils/validator')
const {encrypt} = require('../../utils/encrypter');

module.exports = async ctx =>{
  let {password, password2} = ctx.request.body
  const _id = verifyToken(ctx.header.authorization.split(' ')[1]);

  const user = await User.findOne({_id})
  if(!user){
   ctx.status = 401
   ctx.body = {
     message: '重置密码验证失效, 需要重新发送重置密码邮件'
   }
   return
  }

  // 表单的验证
  const error =validateResetPsw({password, password2})
  if(error){
    ctx.status = 400
    ctx.body = {
      message: error
    }
    return
  }

  password = await encrypt(password);
  await User.findOneAndUpdate({_id}, {
    password
  })

  ctx.body={
    message: '重置密码成功'
  }
}