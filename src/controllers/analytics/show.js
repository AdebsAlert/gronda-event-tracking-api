'use strict'

const Event = require('../../models/event')
const httpStatus = require('http-status')

exports.getAnalytics = async (req, res, next) => {
  try {
    const skip = req.query.skip != null ? parseInt(req.query.skip, 10) : 0
    const limit = req.query.limit != null ? parseInt(req.query.limit, 10) : 0

    let analyticsQuery = {}
    let analytics
    if (req.query.event_name) {
      analyticsQuery.event_name = req.query.event_name
    }

    if (req.query.client) {
      analyticsQuery.client = req.query.client
    }
    analyticsQuery = await Event.find(analyticsQuery).skip(skip).limit(limit).sort({createdAt: -1})

    if (req.query.data === 'count') {
      analytics = analyticsQuery.length
    } else {
      analytics = analyticsQuery
    }

    if (!analytics) {
      res.status(httpStatus.BAD_REQUEST)
      res.send({ success: false, message: 'error fetching analytics' })
    }

    res.status(httpStatus.OK)
    res.send({ success: true, message: 'analytics fetched successfully', data: analytics })
  } catch (error) {
    next(error)
  }
}
