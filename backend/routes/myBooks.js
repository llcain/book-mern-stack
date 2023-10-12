// require express route
const express = require('express');

const {
    createMyBook,
    getMyBooks,
    getMyBook,
    deleteMyBook,
    updateMyBook
} = require('../controllers/myBookController')



const router = express.Router()

// get all books
router.get('/', getMyBooks)

// Get a single book
router.get('/:id', getMyBook)

// Post a new book
router.post('/', createMyBook)

// Delete a new book
router.delete('/:id', deleteMyBook)

// Update a new book
router.patch('/:id', updateMyBook)

module.exports = router