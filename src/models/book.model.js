const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    summary: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: String, required: true },
    genre: { type: String, required: true },
    stock: { type: Number, required: true },
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;