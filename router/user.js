const Router = require('koa-router')

const router = new Router()

// 引入各接口的处理
const {
  loginControler,
  registerControler,
  logoutControler,
  activeEmailControler, 
  changePswControler,
  forgetPswControler,
  resetPswAuthControler,
  resetPswControler,
}
  = require('../controler/user')

/**
 * @route POST /user/register
 * @description 注册
 * @access 接口是公开的
 */
router.post('/register', registerControler)

/**
 * @route POST /user/login
 * @description 登陆
 * @access 接口是公开的
 */
router.post('/login', loginControler)


/**
 * @route POST /change-password
 * @description 修改密码
 * @access 接口是私密的
 */
router.post('/change-password', changePswControler)


/**
 * @route POST /forget-password
 * @description 忘记密码
 * @access 接口是公开的
 */
router.post('/forget-password', forgetPswControler)


/**
 * @route POST /reset-password-authentication
 * @description 重置密码的认证
 * @access 接口是公开的
 */
router.get('/reset-password-authentication', resetPswAuthControler)

/**
 * @route POST /reset-password
 * @description 重置密码
 * @access 接口是公开的
 */
router.get('/reset-password', resetPswControler)


/**
 * @route GET /logout
 * @description 注销账户
 * @access 接口是私密的
 */
router.get('/logout', logoutControler)

/**
 * @route GET /email-activation
 * @description 邮箱激活验证
 * @access 接口是私密的
 */
router.get('/email-activation',activeEmailControler)


// 导出router
module.exports = router
