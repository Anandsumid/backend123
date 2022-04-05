const express= require('express')
const router = express.Router()
const Books = require('../models/books')
const BooksController = require('../controller/BooksController')


// ENDPOINT
router.get('/allbooks', BooksController.get_books)
router.post('/createbook', BooksController.createbooks)
router.put('/updatebook/id/:id', BooksController.updatebooks)
router.delete('/deletebook/id/:id', BooksController.deletebooks)


module.exports = router