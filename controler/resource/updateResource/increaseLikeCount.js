const Resource = require('../../../model/resource')

module.exports = async ctx =>{
  const {_id} = ctx.params

  const resource = await Resource.findOneAndUpdate({_id}, {$inc: {like_counts: 1}})

   // 资源不存在
   if(!resource){
    ctx.status = 400 // bad request
    ctx.body = {
      message: '点赞失败，资源不存在'
    }
  }

  ctx.body = {
    message: '点赞成功'
  }
}