import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// connect to MongoDB
connectDB();

app.use(express.json());

// routes 


app.listen(port, () => console.log(`Server running on port ${port}`));
