const User = require('../../model/user')

module.exports = async ctx => {
  const {_id} = ctx.params

  const user = await User.findOne({_id})

  if(!user){
    ctx.throw(500)
    return
  }

  const collections = user.collections
  ctx.body = {
    collections
  }
}