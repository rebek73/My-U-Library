const Book = require('../models/book.model');

const getAllBookHandler = async (req, res) => {
   
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(404).json({ message: 'Could not find books' });
    }
}

const createNewBookHandler = async (req, res) => {
    try {
        const { title, image, summary, author, publishedYear, genre, stock } = req.body;
        if (!title || !image || !summary, !author || !publishedYear || !genre) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newBook = new Book({
            title,
            image, summary, author, publishedYear, genre, stock
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);

    } catch (error) {
        console.log(error);
        res.status(500).json({ messsage: 'Error creating a new book' })
    }
}

module.exports = { getAllBookHandler, createNewBookHandler };
