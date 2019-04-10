const Koa = require('koa')
// 引入基本配置信息
const {dbConnection, port, secretOrPrivateKey} = require('./config')

  // koa-router 处理路由
  const router = require('./router')
  // koa-body-parser处理请求body
  const bodyParser = require('koa-bodyparser')
  // koa-jwt处理认证
  const jwt = require('koa-jwt')
    const JWTErrorHandler = require('./middlewares/JWTErrorHandler')
  // mongoose 数据库处理
  const mongoose = require('mongoose')
      // mongose数据库连接
      mongoose.connect(dbConnection, {useNewUrlParser: true})
      .then(() => {
        console.log('mongodb is connnected')
      })
      .catch(err => {
        console.log('err---->', err);
      })

const app = new Koa()

app.use(bodyParser()) // koa-bodyparser中间件配置


// koa-jwt的认证监听与错误处理
  app
    .use(JWTErrorHandler)
    .use(
      jwt({secret: secretOrPrivateKey})
        .unless(
          {path: [/\/register/, /\/login/]}
        )
    )

// 在 koa-jwt中间件设置后设置
app.use(router.routes()).use(router.allowedMethods()) // koa-router中间件配置

app.listen(3000, () => {
  console.log(`server is running at http://localhost:${port}`)
})
