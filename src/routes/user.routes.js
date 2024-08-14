const express = require('express');
const router = express.Router();

const getAllUserHandler = require('../controller/user.controller');

router.route("/").get(getAllUserHandler)

module.exports = router;