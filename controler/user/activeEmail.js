const {verifyToken} = require('../../utils/tokener')
const User = require('../../model/user')

module.exports = async ctx=> {
  // 获取url中的captcha值，这是一个token，需要vertify可以得到{id}
  try{
    const _id = verifyToken(ctx.query.captcha)._id;

    // 如果token中的id存在，且数据库存在这样一个用户，将status改为1，示意激活
    if(_id){
      const user = await User.findOne({_id})

      if(user.status===0){
        await User.findOneAndUpdate({_id}, {status: 1})  // 更新
        ctx.status = 200;
        ctx.body = {
          message: '激活成功'
        }
      }else{
        ctx.status = 400
        ctx.body = {
          message: '此邮箱已被激活，不需要重新激活'
        }
      }
    }

  }catch(err){
    console.log("verifyToken error/User.findOne error/findOneAndUpdate... -->", err)
  }
}