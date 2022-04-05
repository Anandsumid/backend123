const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books_Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        require: true
    },
    ISBN: {
        type: Number,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    publish_date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true,
        minimum: 0
    },
    publisher: {
        type: String,
        required: true
    }
})
const Books = mongoose.model("books", books_Schema);

module.exports = Books;