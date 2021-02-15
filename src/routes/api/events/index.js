'use strict'

const express = require('express')
const router = express.Router()
const eventController = require('../../../controllers/events')
const validator = require('express-validation')
const { create } = require('../../../validations/event.validation')

router.post('/', validator(create), eventController.createEvent) // validate and create event

module.exports = router
