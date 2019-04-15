const Resource = require('../../../model/resource')

module.exports = async ctx => {
  const {_id} = ctx.params
  try{
    const resource = await Resource.findOne({_id})
    if(!resource) {
      ctx.status = 400 // bad request
      ctx.body = {
        message: '请求资源失败，资源不存在'
      }
      return
    }

    ctx.body = {
      message: '请求资源成功',
      resource
    }
  
  }catch(err){
    ctx.throw(500)
  }
}