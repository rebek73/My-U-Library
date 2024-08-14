const express = require('express');

const signupHandler = require('../controller/signup.controller')
const loginHandler = require('../controller/login.controller');

const router = express.Router();

router.route('/register').post(signupHandler);
router.route('/login').post(loginHandler);

module.exports = router;