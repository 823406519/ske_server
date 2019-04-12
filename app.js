const Koa = require('koa')
// 引入基本配置信息
const {dbConnection, port, secretOrPrivateKey} = require('./config')

  // kow-views
  const views = require('koa-views')
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

// koa-views配置
app.use(views(__dirname+'/views', { extension: 'ejs' }))


// koa-jwt的认证监听与错误处理
  app
    .use(JWTErrorHandler)
    .use(
      jwt({secret: secretOrPrivateKey})
        .unless( // 不进行监听的路由
          {
            path: [
              /\/register/, 
              /\/login/, 
              /\/email-activation/,
              /\/test/, 
              /\/forget-password/,
              /\/reset-password-authentication/,
            ]}
        )
    )

// 路由
app.use(router.routes()).use(router.allowedMethods()) // koa-router中间件配置

app.listen(3000, () => {
  console.log(`server is running at http://localhost:${port}`)
})
