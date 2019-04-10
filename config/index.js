module.exports = {
  // 如果没有设置环境变量PORT，默认为3000
  port: process.env.PORT || 3000,

  // 数据库连接
  dbConnection: 'mongodb://localhost/test2',

  // 加密的配置，解密中参与hash加密的salt的加盐的轮次
  saltRounds: 10,

  // jsonwebtoken 用于生成token的私钥
  secretOrPrivateKey: 'liuyaohui'
}
