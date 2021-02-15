const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { eventNames } = require('../../utils/constants')

const schema = new Schema({
  client: {
    type: String,
    required: true,
    lowercase: true
  },
  receiver: {
    type: String,
    required: true,
    lowercase: true
  },
  event_name: {
    type: String,
    required: true,
    enum: eventNames
  },
  event_identifier: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

module.exports = { schema }
