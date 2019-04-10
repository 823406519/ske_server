const Koa = require('koa')

  // koa-router 处理路由
  const router = require('./router')
  // koa-body-parser处理请求body
  const bodyParser = require('koa-bodyparser')
  
  const mongoose = require('mongoose')
    const CONFIG = require('./config')
    const {dbConnection} = CONFIG;
      // mongose连接
      mongoose.connect(dbConnection, {useNewUrlParser: true})
      .then(() => {
        console.log('mongodb is connnected')
      })
      .catch(err => {
        console.log('err---->', err);
      })

const app = new Koa()

app.use(bodyParser()) // koa-bodyparser中间件配置
app.use(router.routes()).use(router.allowedMethods()) // koa-router中间件配置

app.listen(3000, () => {
  console.log(`server is running at http://localhost:${CONFIG.port}`)
})
