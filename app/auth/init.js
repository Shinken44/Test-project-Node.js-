const passport = require('passport')
const helper = require('./../../helper')
const LocalStrategy = require('passport-local').Strategy

const authenticationMiddleware = require('./middleware')

passport.serializeUser(function(user, cb) {
    cb(null, user.username)
})

passport.deserializeUser(function(username, cb) {
    helper.findUser(username, cb)
})

function initPassport() {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            helper.findUser(username, (err, user) => {
                if (err) {
                    return done(err)
                }

                // User not found
                if (!user) {
                    console.log('User not found')
                    return done(null, false)
                }

                helper.verifyPassword(password, user.passwordHash)
                    .then((isValid) => {
                        if (!isValid) {
                            return done(null, false)
                        }
                        return done(null, user)
                    })
                    .catch((err) => {
                        return done(err)
                    })
            })
        }
    ))

    passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport