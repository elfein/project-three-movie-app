const router = require('express').Router({ mergeParams: true })
const { Event, Movie, Voter } = require('../db/model')

// Create
router.post('/', (req, res) => {
    const newVoter = new Voter(req.body)
    Event.findById(req.params.eventId)
        .then((event) => {
            console.log(req.params.movieId)
            event.suggestions.id(req.params.movieId).supporters.push(newVoter)
            return event.save()
        })
        .then((event) => {
            res.send(event)
        })
})

module.exports = router