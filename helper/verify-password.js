const bcrypt = require('bcrypt')

function verifyPassword(password, passwordHash) {
    return new Promise(function(resolve, reject) {
        // Always use hashed passwords and fixed time comparison
        bcrypt.compare(password, passwordHash, (err, isValid) => {
            if (err) {
                reject(Error(`bcrypt.compare - ${err}`))
            }
            resolve(isValid)
        })
    })
}

module.exports = verifyPassword