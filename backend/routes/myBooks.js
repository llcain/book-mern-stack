// require express route
const express = require('express');

const {
    createMyBook,
    getMyBooks,
    getMyBook
} = require('../controllers/myBookController')



const router = express.Router()

// get all books
router.get('/', getMyBooks)

// Get a single book
router.get('/:id', getMyBook)

// Post a new book
router.post('/', createMyBook)

// Delete a new book
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a new book"})
})

// Update a new book
router.patch('/:id', (req, res) => {
    res.json({mssg: "Update a new book"})
})

module.exports = router