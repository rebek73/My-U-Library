const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');

const getAllUserHandler  = userController;

router.route("/").get(getAllUserHandler);

module.exports =  getAllUserHandler;