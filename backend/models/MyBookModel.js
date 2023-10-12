const mongoose = require('mongoose')

const Schema = mongoose.Schema

const myBookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('MyBook', myBookSchema)