const Router = require('koa-router')
const router = new Router({
  prefix: '/source'
})

/**
 * @route GET /source/index
 * @description 返回首页知识资源
 * @access 接口是公开的
 */
router.get('/index', ctx => {
  ctx.body = 'source for index'
}) 

/**
 * @route GET /classification/:name
 * @description 返回指定分类名称的资源
 * @access 接口是公开的
 */
router.get('/classification/:name', ctx => {
  ctx.body = `返回${ctx.params.name}资源`
})

module.exports = router
