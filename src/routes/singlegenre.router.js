const express = require('express');
const router = express.Router();

const singlegenreHandler = require('../controller/singlegenre.controller');

router.route("/:id").get(singlegenreHandler);

module.exports = router;