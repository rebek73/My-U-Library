const CryptoJS = require('crypto-js');
const User = require('../models/user.model');

const signupHandler = (async (req, res) => {
    try {
        const newUser = new User ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
            role: req.body.role
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating a new user" });
    }
});

module.exports = signupHandler;
