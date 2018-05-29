'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (precess.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send("Hi I am a chatbot")
})

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === "blondiebytes"){
        res.send(req.query['hub.challenge'])
    }
    res.send("Wrong token")
})

app.listen(app.get('port'), function () {
    console.log("I'm running: port")
})