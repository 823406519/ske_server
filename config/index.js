module.exports = {
  // 如果没有设置环境变量PORT，默认为3000
  port: process.env.PORT || 3000,

  // 数据库连接
  dbConnection: 'mongodb://localhost/test2'
}
