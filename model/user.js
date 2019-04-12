const mongoose = require('mongoose')

// di
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username : {
    type: String,
    require: true,
  },
  email:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },

  // 17. status
  status: {
    type: Number,
    default: 0
  },
  // 18
  reset_password_token:{
    type: String,
  },
  // 19
  reset_password_expires:{
    type: Date,
  }
})


module.exports = mongoose.model('User', UserSchema)