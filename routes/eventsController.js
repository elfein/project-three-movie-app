const router = require('express').Router()
const { Event } = require('../db/model')

// Show All
router.get('/', async (req, res) => {
    const events = await Event.find()
    res.send(events)
})

// Show One
router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.send(event)
})

// Create
router.post('/', async (req, res) => {
    const event = await Event.create(req.body)
    res.send(event)
})

// Update

// Delete

module.exports = router