const express = require('express');
const router = express.Router();

const singlebookHandler = require('../controller/singlebook.controller');

router.route("/:id").get(singlebookHandler);

module.exports = router;