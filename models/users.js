const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: String,
  email: String
})

module.exports = model('Users', schema)
