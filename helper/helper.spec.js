const bcrypt = require('bcrypt')
const expect = require('chai').expect
const helper = require('./')

// Generate Password
const testPassword = '123456'
const salt = bcrypt.genSaltSync(10)
const passwordHash = bcrypt.hashSync(testPassword, salt)

describe('The verify-password module', function() {
    it('verify password', function(done) {

        helper.verifyPassword(testPassword, passwordHash)
            .then((isValid) => {
                expect(isValid).to.equal(true)
                done()
            })
            .catch((err) => {
                throw new Error(`${err}`)
                done()
            })
    })
})