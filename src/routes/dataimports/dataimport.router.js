const express = require('express');

const Book = require('../../models/book.model');
const books = require('../../data/book');

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        //await Book.remove();
        const booksInDB = await Book.insertMany(books.data);
        res.json(booksInDB);
    } catch (error) {
        console.log(error);
        res.json({ message: 'Could not add data to the database' });
    }
})

module.exports = router;