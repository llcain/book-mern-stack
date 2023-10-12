// require MyBooksModel
const MyBook = require('../models/MyBookModel')

// get all books


// get a single book

// create a new book

const createMyBook = async (req, res) => {
    const {title, author, genre} = req.body

    // add book to db
    try {
        const myBooks = await MyBook.create({title, author, genre})
        res.status(200).json(myBooks)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

// delete a book

// update a book

module.exports = {
    createMyBook
}