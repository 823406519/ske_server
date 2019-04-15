const User = require('../../model/user')
const {verifyToken} = require('../../utils/tokener')

module.exports = async ctx => {
  const {_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id

  const {
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