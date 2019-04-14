
const Router = require('koa-router')

const router = new Router()


const {
  createResourceControler
} = require('../../controler/resource')

/**
 * @route POST /user/:id/resources
 * @description 创建资源
 * @access 接口是私密的
 */
router.post('/user/:id/resources', createResourceControler)



module.exports = router