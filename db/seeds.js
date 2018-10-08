require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const { Event, Movie, Voter } = require('./model')

const sam = new Voter({
    name: 'Sam',
    image: 'https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg'
})
const susan = new Voter({
    name: 'Susan',
    img: 'http://static.tumblr.com/b9fe9b418e2d0b8816dcf942898e91a5/gv6qsd3/0Choei9bt/tumblr_static_boh655g9rkg8kwk00sw440ow0.png'
})

const jaws = new Movie({
    name: 'Jaws',
    img: null,
    genre: 'thriller',
    minutes: 120,
    supporters: [sam],
    votes: 1
})
const loveActually = new Movie({
    name: 'Love Actually',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51BnA5c7wML._SY445_.jpg',
    genre: 'rom-com',
    minutes: 140,
    supporters: [sam, susan],
    votes: 2
})

const samsBday = new Event({
    name: 'Sam\'s Bday',
    date: '10/10',
    host: 'Sam',
    feature: null,
    suggestions: [jaws, loveActually]
})

Event.deleteMany({})
    .then(() => samsBday.save())
    .then(() => console.log('Successful save!'))
    .then(() => mongoose.connection.close())
