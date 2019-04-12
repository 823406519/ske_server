const port = 3000;
module.exports = {
  // 如果没有设置环境变量PORT，默认为3000
  port: process.env.PORT || port,
  

  // 数据库连接
  dbConnection: 'mongodb://localhost/test2',

  // 加密的配置，解密中参与hash加密的salt的加盐的轮次
  saltRounds: 10,

  // jsonwebtoken 用于生成token的私钥
  secretOrPrivateKey: 'liuyaohui',
  // jsonwebtoken 过期时间
  expiresIn: '1h',

  // reset password email token 的过期毫秒事件
  resetPswExpiresIn: 3600000,  // 1h

  // baseurl
  baseUrl: `http://localhost:${port}`,

}
