const Resource = require('../../../model/resource')

module.exports = async ctx => {
  const {classification,author_id, title, content} = ctx.request.body
  
  try{
    const newResource = new Resource({
      classification,
      author_id,
      title,
      content
    })
    const resource = await newResource.save()
    ctx.body = {
      message: '创建资源成功',
      resource
    }

  }catch(err){
    ctx.throw(500)
  }
}