// 导出的emial对象
const emailer = {}

// 引入一个发送email的方法，将它挂载道emailer对象上
emailer.sendEmail = require('./sendEmail')

module.exports = emailer
