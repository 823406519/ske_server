const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ResourceSchema = new Schema({
  classification:{
    type: Number,
    default: 0
  },
  author_id: {
    type: String
  },
  last_update_time: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  like_count: {
    type: Number,
    default: 0
  },
  read_count:{
    type: Number,
    default: 0
  },
  collection_count:{
    type: Number,
    default: 0
  },
  comments: {
    type: [{commenter_id: String, comment_content: String}]
  }
})

module.exports = mongoose.model('Resource', ResourceSchema)
