'use strict'

const express = require('express')
const router = express.Router()
const analyticsController = require('../../../controllers/analytics')

router.get('/', analyticsController.getAnalytics) // get analytics

module.exports = router
