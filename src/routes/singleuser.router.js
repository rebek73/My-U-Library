const express = require('express');
const router = express.Router();

const singleuserHandler = require('../controller/singleuser.controller');

router.route("/:id").get(singleuserHandler);

module.exports = router;