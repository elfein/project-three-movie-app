const router = require('express').Router({ mergeParams: true })
const { Event, Movie } = require('../db/model')

// Show One

// Create
router.post('/', (req, res) => {
    const newMovie = new Movie(req.body)
    console.log(req.params.eventId)
    Event.findById(req.params.eventId)
        .then((event) => {
            event.suggestions.push(newMovie)
            return event.save()
        })
        .then((event) => {
            res.send(event)
        })
})

// Delete

module.exports = router