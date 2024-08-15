const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const bookController = require('../controller/book.controller');

const { createNewBookHandler, getAllBookHandler } = bookController;

// to create or add new book
router.route("/", auth).post(createNewBookHandler);

// to get the whole list of books
router.route("/", auth).get(getAllBookHandler);

module.exports = router;
