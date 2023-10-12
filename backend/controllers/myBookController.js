// require MyBooksModel
const MyBook = require('../models/MyBookModel')
const mongoose = require('mongoose')

// get all books

const getMyBooks = async (req, res) => {
    const myBooks = await MyBook.find({}).sort({createdAt: -1})

    res.status(200).json(myBooks)
}


// get a single book

const getMyBook = async (req, res) => {
    const { id  } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book'})
    }

    const myBook = await MyBook.findById(id)

    if (!myBook) {
        return res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(myBook)
}



// create a new book

const createMyBook = async (req, res) => {
    const {title, author, genre} = req.body

    // add book to db
    try {
        const myBook = await MyBook.create({title, author, genre})
        res.status(200).json(myBook)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

// delete a book

const deleteMyBook = async (req, res ) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book'})
    }

    const myBook = await MyBook.findOneAndDelete({_id: id})

    if (!myBook) {
        return res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(myBook)  
    


}

// update a book

const updateMyBook = async (req, res) => {
    const { id  } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book'})
    }

    const myBook = await MyBook.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!myBook) {
        return res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(myBook)

}

module.exports = {
    getMyBooks,
    getMyBook,
    createMyBook,
    deleteMyBook,
    updateMyBook
}