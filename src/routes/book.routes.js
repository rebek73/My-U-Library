const express = require('express');
const router = express.Router();

const getAllBookHandler = require('../controller/book.controller');

// Get all books with search and filtering
router.get('/').get(getAllBookHandler);

module.exports = router;
