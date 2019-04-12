// 用户所有信息的获取

const Router = require('koa-router')
const router = new Router()

const {
  userInfoControler,
} = require('../../controler/user')

/**
 * @route GET /user-info
 * @description 获取用户信息
 * @access 接口是私密的
 */
router.get('/user-info',userInfoControler)


module.exports = router

