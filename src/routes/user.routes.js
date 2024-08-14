const express = require('express');
const router = express.Router();

const getAllUserHandler = require('../controller/user.controller');

// get all users
router.route("/").get(getAllUserHandler)

module.exports = router;