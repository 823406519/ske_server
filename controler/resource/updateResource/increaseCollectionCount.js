const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const {verifyToken} = require('../../../utils/tokener')

module.exports = async ctx =>{
  const {_id} = ctx.params
  const {_id:u_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取用户id
  const resource = await Resource.findOneAndUpdate({_id}, {$inc: {collection_counts: 1}})

  // 资源不存在
  if(!resource){
    ctx.status = 400 // bad request
    ctx.body = {
      message: '收藏失败，资源不存在'
    }
  }
  
  // 将收藏同步到用户collection中
  await User.findOneAndUpdate({_id: u_id}, {$addToSet: {collections: resource._id}})
  
  ctx.body = {
    message: '收藏成功'
  }
}