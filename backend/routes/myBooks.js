// require express route
const express = require('express');

const router = express.Router()

// get all books
router.get('/', (req, res) => {
    res.json({mssg: "Get all books"})
})

// Get a single book
router.get('/:id', (req, res) => {
    res.json({mssg: "Get a single book"})
})

// Post a new book
router.post('/', (req, res) => {
    res.json({mssg: "Post a new book"})
})

// Delete a new book
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a new book"})
})

// Update a new book
router.patch('/:id', (req, res) => {
    res.json({mssg: "Update a new book"})
})

module.exports = router