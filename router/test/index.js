const Router = require('koa-router')
const router = new Router()
// 测试路由的配置

/**
 * @route GET /test
 * @description 注销账户
 * @access 接口是私密的，用于测试token
 */
const {verifyToken} = require('../../utils/tokener')
router.get('/liuyaohui/test', async ctx => {
 ctx.body = {
   'ctx.header.authorization': ctx.header.authorization,
   target: verifyToken(ctx.header.authorization.split(' ')[1]),
 }

})

/**
 * @description 测试
 */
router.get('/test', async ctx => {
  await ctx.render('index')
})

module.exports = router