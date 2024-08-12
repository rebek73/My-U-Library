import express from 'express';
import Checkout from '../models/Checkout';
import Book from '../models/Book';
import User from '../models/User';

const router = express.Router();

// Checkout a book
router.post('/', async (req, res) => {
    const { bookId, userId } = req.body;
  
    try {
      const book = await Book.findById(bookId);
      const user = await User.findById(userId);
  
      if (!book || !user || book.stock === 0) {
        return res.status(400).json({ message: 'Book not available or user not found' });
      }
  
      book.stock--;
      await book.save();
  
      const checkout = new Checkout({
        book: bookId,
        user: userId,
        bookTitle: book.title,
        bookAuthor: book.author,
        userFirstName: user.firstName,
        userLastName: user.lastName
      });
  
      const savedCheckout = await checkout.save();
      res.status(201).json(savedCheckout);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

// Return a book
router.put('/:id', async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      return res.status(404).json({ message: 'Checkout not found' });
    }

    const book = await Book.findById(checkout.book);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.stock++;
    await book.save();

    checkout.returnDate = new Date();
    await checkout.save();

    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get all checkout
router.get('/', async (req, res) => {
  try {
    const checkouts = await Checkout.find();
    res.json(checkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Checkout Status
router.get('/checkoutStatus', async (req, res) => {
    try {
      const checkouts = await Checkout.find().populate('book').populate('user');
  
      const usersWithCheckouts = checkouts.map(checkout => ({
        user: checkout.user,
        checkedOutBooks: [{
          bookId: checkout.book._id,
          bookTitle: checkout.bookTitle
        }]
      }));
  
      const uncheckouts = await Checkout.find().populate('book').populate('user');
      const usersWithoutCheckouts = uncheckouts.filter(uncheckoutsUser => !usersWithCheckouts.some(checkoutUser => checkoutUser.user._id.equals(uncheckoutsUser._id))).map(uncheckoutsUser => ({
        user: uncheckoutsUser.user,
        checkoutDetails: [{
            checkoutId: uncheckoutsUser._id,
            checkoutName: uncheckoutsUser.userFirstName,
            checkoutLastname: uncheckoutsUser.userLastName,
            checkoutDate: uncheckoutsUser.checkoutDate,
            checkoutReturnDate: uncheckoutsUser.returnDate,
        
        }],
        uncheckedOutBooks: [{
            bookId: uncheckoutsUser.book._id,
            bookTitle: uncheckoutsUser.bookTitle
        }]
      }));
  
      const response = {
        users: [...usersWithCheckouts, ...usersWithoutCheckouts]
      };
  
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

  router.get('/checkoutStatus/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const checkouts = await Checkout.find({ user: userId }).populate('book');
  
      const userCheckouts = checkouts.map(checkout => ({
        bookId: checkout.book._id,
      }));
  
      res.json(userCheckouts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

export default router;
