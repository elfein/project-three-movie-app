const mongoose = require('mongoose')
const { EventSchema, MovieSchema, VoterSchema } = require('./schema')

const VoterModel = mongoose.model('Voter', VoterSchema)
const MovieModel = mongoose.model('Movie', MovieSchema)
const EventModel = mongoose.model('Event', EventSchema)

module.exports = { Event: EventModel, Movie: MovieModel, Voter: VoterModel }