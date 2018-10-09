const Schema = require('mongoose').Schema

const VoterSchema = new Schema({
    name: String,
    image: {
        type: String,
        default: 'https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg'
    }
})

const MovieSchema = new Schema({
    name: String,
    img: {
        type: String,
        default: 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279'
    },
    genre: String,
    minutes: Number,
    supporters: []
})

const EventSchema = new Schema({
    name: String,
    date: String,
    host: String,
    about: String,
    feature: {
        type: MovieSchema,
        default: {
            name: '???',
            img: 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279',
            genre: null,
            minutes: null,
            supporters: ['Sam', 'Susan', 'Kevin']
        }
    },
    suggestions: [MovieSchema]
})

module.exports = { EventSchema, MovieSchema, VoterSchema }