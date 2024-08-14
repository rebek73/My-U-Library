const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const genreHandler = require('../controller/genre.controller');

router.route("/", authMiddleware).get(genreHandler)

module.exports = router;