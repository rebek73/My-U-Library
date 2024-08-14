const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/database');

const bookData = require('./routes/dataimport.router');
const genreData = require('./routes/genreimport.router');
const userData = require('./routes/userimport.router');

const bookRouter = require('./routes/book.routes');
const genreRouter = require('./routes/genre.routes');
const userRouter = require('./routes/user.routes');
const checkoutRouter = require('./routes/checkout.routes');
// to check one single book detail
const singleBookRouter = require('./routes/singlebook.router')
// to auth user by email and password
const authRouter = require('./routes/auth.routes');

const app = express();
const port = process.env.PORT || 8080;

// connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my u library app");
})

// routes 
app.use('/api/bookdata', bookData);
app.use('/api/genredata', genreData);
app.use('/api/userdata', userData);

app.use('/api/books', bookRouter);
app.use('/api/books', singleBookRouter);
app.use('/api/genres', genreRouter);
app.use('/api/users', userRouter);
app.use('/api/checkouts', checkoutRouter);

app.use('/api/auth', authRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to library DB");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})