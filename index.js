const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const { Client } = require('pg')
const app = express()

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Mike'
    })
})

app.get('/users', function(req, res, next) {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'test_db',
        password: 'vermiliot',
        port: 5432,
    })

    client.connect()
    client.query('SELECT name, age FROM users;')
        .then(result => { res.json(result.rows) })
        .catch(e => { return next(e.stack) })
        .then(() => client.end())
        .catch(e => { return next(e.stack) })
})

app.post('/users', function(req, res, next) {

    const user = req.body

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'test_db',
        password: 'vermiliot',
        port: 5432,
    })

    client.connect()
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age])
        .then(result => { res.send(200) })
        .catch(e => { return next(e.stack) })
        .then(() => client.end())
        .catch(e => { return next(e.stack) })
})

app.listen(50300)