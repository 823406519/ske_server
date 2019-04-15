const Resource = require('../../../model/resource')

module.exports = async ctx => {

  const {title, sort} = ctx.query
 
  if(sort!=='newest' && sort !=='hot'){
    ctx.status = 400 // bad request
    ctx.body = {
      message: '请求推荐资源失败，只返回最新和最热推荐资源'
    }
    return
  }
  
  let sortCondtion = 'like_counts'
  if(sort==='newest') {
    sortCondtion = 'last_update_time'
  }

  const resources = await Resource.find({
    title: {$regex: title, $options: 'i'}
  })


  ctx.body = {
    message: `根据搜索，成功返回最${sort==='hot'?'热':'新'}资源`,
    resources
  }
}