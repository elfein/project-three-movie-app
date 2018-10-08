require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
});
// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build'));

// root index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

// app.use('/users', usersRouter);
const eventsController = require('./routes/eventsController')

app.use('/api/events', eventsController)

module.exports = app;
