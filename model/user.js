const mongoose = require('mongoose')

// di
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username : {
    type: String,
    require: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('User', UserSchema)