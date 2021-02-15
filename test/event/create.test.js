/* eslint-disable no-undef */
'use strict'

process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../src/index').app
// eslint-disable-next-line no-unused-vars
const should = chai.should()

chai.use(chaiHttp)

describe('Testing Event Creation', () => {
  const correctEventData = {
    client: 'macbook pro 2020',
    receiver: 'web',
    event_name: 'loginButtonClick',
    event_identifier: Math.random().toString(36).substring(2, 15)
  }

  const wrongEventData = {
    client: 'macbook pro 2020',
    receiver: 'web',
    event_name: 'unregisteredEvent',
    event_identifier: Math.random().toString(36).substring(2, 15)
  }

  it('should fail new event creation due to wrong event name', (done) => {
    chai
      .request(app)
      .post('/api/v1/event')
      .send(wrongEventData)
      .end((err, res) => {
        if (err) {}
        res.should.have.status(400)
        res.body.should.be.a('object')
        done()
      })
  })

  it('should pass new event creation', (done) => {
    chai
      .request(app)
      .post('/api/v1/event')
      .send(correctEventData)
      .end((err, res) => {
        if (err) {}
        res.should.have.status(201)
        res.body.should.be.a('object')
        done()
      })
  })
})
