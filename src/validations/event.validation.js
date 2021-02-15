'use strict'

const Joi = require('joi')
const { eventNames } = require('../utils/constants')

// User validation rules
module.exports = {
  create: {
    body: {
      client: Joi.string().required(),
      receiver: Joi.string().required(),
      event_name: Joi.string().required().valid(...eventNames),
      event_identifier: Joi.string().required()
    }
  }
}
