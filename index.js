const app = require('./app')
const port = process.env.PORT || 50300

app.listen(port, function(err) {
    if (err) {
        throw err
    }

    console.log(`server is listening on ${port}...`)
})