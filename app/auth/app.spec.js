const bcrypt = require('bcrypt')
const express = require('express')
const bodyParser = require('body-parser')
const expect = require('chai').expect
const helper = require('./index')

describe('The init module', function() {
    it('app init', function(done) {

        const app = express()
        app.use(bodyParser.urlencoded({
            extended: false
        }))

        try {
            require('./').init(app)
            expect(true).to.be.true
            done()
        } catch (err) {
            throw new Error(`${err}`)
            done()
        }

    })
})