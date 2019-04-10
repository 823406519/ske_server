// 注册的处理
const User = require('../../model/user');

module.exports = async ctx => {
  // ctx.body = ctx.request.body
  const result = await User.find({email: ctx.request.body.email});
  if(result.length > 0){
    ctx.body = "邮箱已经存在"
  }else{
    // 没查到
    const newUser = new User({
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
    });
    await newUser.save()
      .then(user => {
        ctx.body = user
      })
      .catch(err => {
        console.log(err)
      })
  }
} 
