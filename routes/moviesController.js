const router = require('express').Router({ mergeParams: true })
const { Event, Movie } = require('../db/model')

// Create
router.post('/', (req, res) => {
    const newMovie = new Movie(req.body)
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
router.delete('/:id', (req, res) => {
    Event.findById(req.params.eventId)
        .then((event) => {
            return event.update({ $pull: { suggestions: { _id: req.params.id } } })
        })
        .then(event => {
            res.send(event)
        })
})

module.exports = router