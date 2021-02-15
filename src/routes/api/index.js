'use strict'
const express = require('express')
const router = express.Router()
const analyticsRouter = require('./analytics')
const eventsRouter = require('./events')
const config = require('../../config')

router.get('/status', (req, res) => { res.send({status: `${config.app} is running OK`}) }) // api status

router.use('/event', eventsRouter) // mount events paths
router.use('/analytics', analyticsRouter) // mount analytics paths

module.exports = router
