import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import bookRoutes from './routes/books';
import userRoutes from './routes/users';
import checkoutRoutes from './routes/checkout';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// connect to MongoDB
connectDB();

app.use(express.json());

// routes 
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/checkouts', checkoutRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));
