const User = require('../../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
  const {secretOrPrivateKey} = require('../../config')

module.exports = async ctx => {
  const {email, password} = ctx.request.body;

  const users =await User.find({email})

  try{
    if(!users.length){
      ctx.status = 401;
      ctx.body = {
        message: '邮箱错误'
      }
      return;
    }
    
    // 密码校对是否相等
    if(await bcrypt.compare(password, users[0].password)){
      const {id, username, avatar} = users[0];
      const playload = {id, username, avatar}
      //生成token
      const token = jwt.sign(playload, secretOrPrivateKey, {expiresIn: '1h'})
  
      ctx.body = {
        sussces: true,
        token: 'Bearer '+token,
       }
     }else{
       ctx.status = 401;
       ctx.body={
         message: '密码错误'
     } // 密码校对 end
    }  // try end
  }catch(err){
    ctx.eror(500, 'server error', {code: 1})
  }// catch end
}
