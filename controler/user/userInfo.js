const User = require('../../model/user')

module.exports = async ctx =>{
  
  const {_id} = ctx.query;
  const user = await User.findOne({_id})

  if(!user){
    ctx.throw(500)
    return
  }
  ctx.body = {
    user
  }
}