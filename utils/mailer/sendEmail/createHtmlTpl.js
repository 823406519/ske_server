const ejs = require('ejs')

/**
 * 返回html邮件模板字符串
 * @param url 用于传递url请求给用户
 * @param tplPath 邮件模板路径的普通  ----> 例如 '/ejs/htmlTpl.ejs'
 * @return { promise--> resolve --> string}
 * @todo 没有catch error
 */
module.exports = createHtmlTpl = async function(url, tplPath) {
  const result = await ejs.renderFile(__dirname + tplPath, { url })
  return result
}
