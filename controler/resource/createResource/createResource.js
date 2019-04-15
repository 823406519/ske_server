const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const {verifyToken} = require('../../../utils/tokener')

module.exports = async ctx => {
  const {_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  const {classification,title, content} = ctx.request.body
  
  try{
    const newResource = new Resource({
      classification,
      author_id: _id,
      title,
      content
    })
    const resource = await newResource.save()

    // 保存资源id到用户collections
    const user = await User.findOneAndUpdate({_id},
      {
        $addToSet: {
          collections: resource._id
        } 
      }
    )

    // 处理用户不存在
    if(!user){
      ctx.status = 401 // bad request
      ctx.body = {
        message: '新建资源失败，请尝试先登录'
      }
      return
    }

    ctx.status = 201  // created
    ctx.body = {
      message: '创建资源成功',
      resource
    }

  }catch(err){
    ctx.throw(500)
  }
}