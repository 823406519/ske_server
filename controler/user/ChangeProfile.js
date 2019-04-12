const User = require('../../model/user')

module.exports = async ctx => {
  const {
    _id,
    gender,
    age,
    location,
    birthday,
    mtto,
    introduction,
    private,
  } = ctx.request.body

  await User.findOneAndUpdate({_id},{
    gender,
    age,
    location,
    birthday,
    mtto,
    introduction,
    private
  })

  ctx.body = {
    message: '个人信息更改已保存',
  }
}