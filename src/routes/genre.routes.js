const express = require('express');
const router = express.Router();


const genreHandler = require('../controller/genre.controller');

router.route("/").get(genreHandler)

module.exports = router;