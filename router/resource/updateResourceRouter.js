const Router = require('koa-router')

const router = new Router()

const {
  updateResourceControler
} = require('../../controler/resource')

/**
 * @route POST /update-resources/:_id
 * @description 更新资源
 * @access 接口是私密的
 */
router.post('/update-resources/:_id', updateResourceControler)

module.exports = router