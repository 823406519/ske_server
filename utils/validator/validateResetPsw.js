const isLength = require('validator/lib/isLength')

module.exports = validateLogin = ({password, password2}) =>{

  if(!isLength(password, {min:6})){
    return '密码长度不能小于6位'
  }

  if(password !== password2){
    return '两次输入密码不一致'
  }
  // 如果验证通过，error返回''
  return ''
}