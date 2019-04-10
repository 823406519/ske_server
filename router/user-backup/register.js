// 注册的处理
const User = require('../../model/user')
const gravatar = require('gravatar')
const  {encrypt} = require('../../utils/encrypter')

module.exports = async ctx => {
  const {username, email, password} = ctx.request.body;
  try{
    const users = await User.find({email});
    if(users.length){
      ctx.status = 400;
      ctx.body = {
        message: '邮箱已经存在'
      }
    }else{
      // mm即如果没有设置头像，显示空头像
      const avatar = gravatar
        .url(email, {protocol: 'https',s: '200', r: 'pg', d: 'mm'})

      const newUser = new User({
        username,
        email,
        password: await encrypt(password),
        avatar,
      })

      const user = await newUser.save()
      ctx.status =200
      ctx.body = {
        message: '注册成功',
        user
      }
    }
  }catch{
    ctx.throw(500, 'server error', {code: 1})
  }// catch end
} 
