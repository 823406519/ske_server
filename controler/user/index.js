const loginControler = require('./login')
const registerControler = require('./register')
const logoutControler = require('./logout')
const activeEmailControler =require('./activeEmail')
const changePswControler = require('./changePsw')
const forgetPswControler = require('./forgetPsw')
const resetPswAuthControler = require('./resetPswAuth')
const resetPswControler = require('./resetPsw')
const userInfoControler = require('./userInfo')
const changeUsernameControler = require('./changeUsername')
const ChangeProfileControler = require('./ChangeProfile')

module.exports = {
  loginControler,
  registerControler,
  logoutControler,
  activeEmailControler,
  changePswControler,
  forgetPswControler,
  resetPswAuthControler,
  resetPswControler,
  userInfoControler,
  changeUsernameControler,
  ChangeProfileControler
}