'use strict'

const config = require('../config')
const express = require('express')
const morgan = require('morgan')
const mongooseMorgan = require('mongoose-morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const errorHandler = require('../middlewares/error-handler')
const apiRouter = require('../routes/api')

const app = express()

// logger
app.use(mongooseMorgan({
  collection: 'error_logs',
  connectionString: config.mongo.uri
},
{
  skip: function (req, res) {
    return res.statusCode < 400
  }
},
'short'
))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())

if (config.env !== 'test') app.use(morgan('combined'))

app.use('/api/v1', apiRouter)
app.use(errorHandler.handleNotFound)
app.use(errorHandler.handleError)

exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`)
      process.exit(-1)
    }

    console.log(`${config.app} is running on ${config.port}`)
  })
}

exports.app = app
