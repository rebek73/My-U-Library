const express = require('express');
const router = express.Router();

const getAllCheckoutHandler = require('../controller/checkout.controller');


// Get all checkout
router.get('/').get(getAllCheckoutHandler);

module.exports = router;
