const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const {verifyToken} = require('../../../utils/tokener')

module.exports = async ctx => {
  const {_id:commenter_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id 
  const user = await User.findOne({_id: commenter_id})
  if(!user){
    ctx.status = 400 // bad request
    ctx.body = {
      message: '错误请求，请登陆后再评论'
    }
    return
  }

  const {_id} = ctx.params
  const {comment} = ctx.request.body

  const resource = await Resource.findOneAndUpdate({_id}, 
    {
      $addToSet: {
        comments: { // comments 数组
          commenter_id,
          comment
        },
      }
    }  
  )

  if(!resource){
    ctx.status = 400 //bad request
    ctx.body = {
      message: '错误请求，找不到资源'
    }
    return
  }

  ctx.body = {
    message: "评论成功",
    resource
  }
}