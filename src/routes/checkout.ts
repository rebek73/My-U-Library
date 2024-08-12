import express from 'express';
import Checkout from '../models/Checkout';
import Book from '../models/Book';
import User from '../models/User';

const router = express.Router();

// Checkout a book
router.post('/', async (req, res) => {
    
  });
  

// Return a book by checkout ID
router.put('/:id', async (req, res) => {
  
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

// Checkout Status for all users -> checkout and uncheckout book
router.get('/checkoutStatus', async (req, res) => {
   
  });
  

  // Checkout status by user ID
router.get('/checkoutStatus/:userId', async (req, res) => {
   
  });

export default router;
