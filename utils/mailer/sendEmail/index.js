const transporter = require('./transporter')

// 创建email html模板的方法
const createHtmlTpl = require('./createHtmlTpl')

/**
 * 发送邮件
 * @type async function
 * @param to 目标对象
 * @param url 发送用户的url请求
 * @param tplPath 邮件模板字符串补充路径
 * @todo 没有catch error
 */
module.exports = async function(to, url, tplPath) {
  const htmlTpl = await createHtmlTpl(url, tplPath)
  const mailOptions = {
    from: '<test823406519@163.com>', // 发送者
    to, // 接受者
    subject: '密码验证邮件', // 邮件主题
    html: htmlTpl
    // 使用的html模板
  }
  const result = await transporter.sendMail(mailOptions)
  if (result) {
    console.log('邮件发送成功')
  } else {
    console.log('邮件发送失败')
  }
}
