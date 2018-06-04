const bcrypt = require('bcrypt')

// Generate Password
const saltRounds = 10
const myPlaintextPassword = '123456'
const salt = bcrypt.genSaltSync(saltRounds)
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt)

const user = {
    username: 'admin',
    passwordHash,
    id: 1
}

function findUser(username, callback) {
    if (username === user.username) {
        return callback(null, user)
    }
    return callback(null)
}

module.exports = findUser