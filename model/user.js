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
  }
})


module.exports = mongoose.model('User', UserSchema)