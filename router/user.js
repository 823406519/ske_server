const Router = require('koa-router')

const router = new Router()

// 引入各接口的处理
const {loginControler,registerControler,logoutControler}
  = require('../controler/user')

/**
 * @route POST /user/register
 * @description 注册
 * @access 接口是公开的
 */
router.post('/register', registerControler)

/**
 * @route POST /user/classification/:name
 * @description 登陆
 * @access 接口是公开的
 */
router.post('/login', loginControler)

/**
 * @route GET /user/logout
 * @description 注销账户
 * @access 接口是公开的
 */
router.get('/logout', logoutControler)


// 导出router
module.exports = router
