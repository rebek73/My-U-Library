const express = require('express');
const router = express.Router();
const verifyUser = require('../middleware/auth');

const bookController = require('../controller/book.controller');

const {createNewBookHandler, getAllBookHandler} = bookController;

router.route("/").post(verifyUser, createNewBookHandler);

router.route("/").get(verifyUser, getAllBookHandler);

module.exports = router;
