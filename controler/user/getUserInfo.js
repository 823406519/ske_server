const User = require('../../model/user')

module.exports = async ctx => {
  const { _id } = ctx.params
  const user = await User.findOne({ _id })

  if (!user) {
    ctx.throw(500)
    return
  }

  ctx.body = {
    user: {
      status: user.status,
      gender: user.gender,
      age: user.age,
      birthday: user.birthday,
      location: user.location,
      mtto: user.mtto,
      introduction: user.introduction,
      collections: user.collections,
      resources: user.resources,
      username: user.username,
      email: user.email,
      avatar: user.avatar
    }
  }
}
