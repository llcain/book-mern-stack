// require express route
const express = require('express');

// require MyBooksModel
const MyBook = require('../models/MyBookModel')

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
router.post('/', async (req, res) => {
    const {title, author, genre} = req.body

    try {
        const myBooks = await MyBook.create({title, author, genre})
        res.status(200).json(myBooks)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
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