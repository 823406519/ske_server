const Resource = require('../../../model/resource')

module.exports = async ctx => {
  const {_id} = ctx.params
  const {title, content} = ctx.request.body

  try{
    // 更新title，content，last_update_time
    await Resource.findOneAndUpdate({_id}, {title, content, last_update_time: Date.now()})
    ctx.body = {
      message: '资源更新成功'
    }
  }catch(err){
    ctx.throw(500)
  }
}