const express = require('express')
const app = express()
const bodyparser = require("body-parser")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")

const router = require('./router')

// const path = require('path')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: uuidv4(), // making enxrypted password
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router)

app.get('/', (req, res) => {
    res.render('main')
})

app.get('/game', (req, res) => {
    res.render('game')
})

app.get('/login', (req, res) => {
    res.render('login', {title: "Login Feature"})
})

app.listen(3000)
    console.log('Server menyala di localhost:3000')