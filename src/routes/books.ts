import express from 'express';
import Book from '../models/Book';

const router = express.Router();

// Get all books with search and filtering
router.get('/', async (req, res) => {
  try {
    const { title, author, genre } = req.query;

    let query: any = {};
    if (typeof title === 'string') {
      query.title = { $regex: new RegExp(title, 'i') };
    }
    if (typeof author === 'string') {
      query.author = { $regex: new RegExp(author, 'i') };
    }
    if (typeof genre === 'string') {
      query.genre = genre;
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, publishedYear, genre, stock } = req.body;

  try {
    const book = new Book({
      title,
      author,
      publishedYear,
      genre,
      stock,
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
