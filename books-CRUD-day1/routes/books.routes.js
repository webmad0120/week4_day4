const express = require('express')
const router = express.Router()

const Book = require('../models/book.model')

router.get('/list', (req, res) => {
  Book.find()
    .then(allBooks => res.render('books/books-list', { books: allBooks }))
    .catch(err => console.log("Error consultadno los libros en la BBDD: ", err))
})

router.get('/details/:theBookIdFromTheURL', (req, res) => {

  const bookId = req.params.theBookIdFromTheURL

  Book.findById(bookId)
    .then(theBook => res.render('books/book-details', theBook))
    .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
})

module.exports = router