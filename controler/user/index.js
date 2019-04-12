const loginControler = require('./login')
const registerControler = require('./register')
const logoutControler = require('./logout')
const activeEmailControler =require('./activeEmail')
const changePswControler = require('./changePsw')
const forgetPswControler = require('./forgetPsw')
const resetPswAuthControler = require('./resetPswAuth')
const resetPswControler = require('./resetPsw')

module.exports = {
  loginControler,
  registerControler,
  logoutControler,
  activeEmailControler,
  changePswControler,
  forgetPswControler,
  resetPswAuthControler,
  resetPswControler
}