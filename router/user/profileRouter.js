// 修改用户中心相关的信息
const Router = require('koa-router')
const router = new Router()

// 引入各接口的处理
const {
  changeUsernameControler,
  changeProfileControler,
} = require('../../controler/user')


/**
 * @route POST /change-username
 * @description 获取用户信息
 * @access 接口是私密的
 */
router.post('/change-username',changeUsernameControler)

/**
 * @route post /profile
 * @description 修改用户中心的信息
 * @access 接口是私密的
 */
router.post('/change-profile', changeProfileControler)


// 导出router
module.exports = router
