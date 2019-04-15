const Resource =require('../../../model/resource')
const {verifyToken} = require('../../../utils/tokener')

module.exports = async ctx => {
  const {_id} = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  const {r_id} = ctx.params
  const {classification,title, content} = ctx.request.body

  try{

    const resource = await Resource.findOne({_id: r_id})
    if(!resource){
      ctx.status = 400 // bad request
      ctx.body ={
        message: '编辑资源失败，找不到资源'
      }
      return
    }
    
    if(_id !== resource.author_id){ // 保证不是作者不能进行编辑，此前已有token验证
      ctx.status = 400 // bad request
      ctx.body = {
        message: "编辑资源请求不能处理"
      }
      return
    }

    // 更新资源
    await Resource.findOneAndUpdate(
      {_id: r_id}, 
      {classification,title, content, last_update_time: Date.now()})
    ctx.body = {
      message: "编辑更新成功"
    }
  }catch(err){
    ctx.throw(500)
  }
}