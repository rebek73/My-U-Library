const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/database');
//
const bookRouter = require('./routes/book.routes');
const genreRouter = require('./routes/genre.routes');
const userRouter = require('./routes/user.routes');

// to check one single book detail
const singleBookRouter = require('./routes/singlebook.router')
const singleGenreRouter = require('./routes/singlegenre.router')
const singleUserRouter = require('./routes/singleuser.router')

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
app.use('/api/books', bookRouter);
app.use('/api/books', singleBookRouter);

app.use('/api/genres', genreRouter);
app.use('/api/genres', singleGenreRouter);

app.use('/api/users', userRouter);
app.use('/api/users', singleUserRouter);

app.use('/api/auth', authRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to library DB");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})