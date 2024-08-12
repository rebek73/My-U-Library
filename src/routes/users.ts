import express from 'express';
import User from '../models/User';

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const { firstName, lastName, email, role } = req.body;

    try {
      const user = new User({
        firstName,
        lastName,
        email,
        role,
      });
  
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

// Get all users
router.get('/', async (req,  res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'   
     });
      }
   });
   
export default router;
