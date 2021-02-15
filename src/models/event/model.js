const mongoose = require('mongoose')
const { schema } = require('./schema')

const Event = mongoose.model('Event', schema)
module.exports = Event
