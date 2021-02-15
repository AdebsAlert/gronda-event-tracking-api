'use strict'

const Event = require('../../models/event')
const httpStatus = require('http-status')

exports.createEvent = async (req, res, next) => {
  try {
    const event = new Event(req.body)
    const savedEvent = await event.save()
    res.status(httpStatus.CREATED)
    res.send({ success: true, message: 'event created successfully', data: savedEvent })
  } catch (error) {
    return next(error)
  }
}
