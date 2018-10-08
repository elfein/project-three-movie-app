const router = require('express').Router()
const { Event } = require('../db/model')

// Show All
router.get('/', async (req, res) => {
    const events = await Event.find()
    res.send(events)
})

// Show One

// Create

// Update

// Delete

module.exports = router