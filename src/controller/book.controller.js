const Book = require("../models/book.model");

const getAllBookHandler = async (req, res) => {
    const bookGenre = req.query.genre 
        try {
            let books
            if (bookGenre) {
                books = await Book.find({ genre: bookGenre });
            } else {
                books = await Book.find({});
            }
            books ? res.json(books) : res.status(404).json({ message: 'No data found' });
        } catch (error) {
            console.log(error);
        }
    }


    module.exports = getAllBookHandler;
