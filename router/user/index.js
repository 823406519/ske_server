const Router = require('koa-router')

const router = new Router()

// 引入各接口的处理
const register = require('./register')
const login = require('./login')
const logout = require('./logout')

/**
 * @route POST /register
 * @description 注册
 * @access 接口是公开的
 */
router.post('/register', register)

/**
 * @route POST /classification/:name
 * @description 登陆
 * @access 接口是公开的
 */
router.post('/login', login)

/**
 * @route GET /logout
 * @description 注销账户
 * @access 接口是公开的
 */
router.get('/logout', logout)


// 导出router
module.exports = router
