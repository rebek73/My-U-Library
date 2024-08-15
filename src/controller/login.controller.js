const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const loginHandler = (async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json({message: "Incorrect email address"});

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({message: "Incorrect password"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({email: user.email}, process.env.ACCESS_TOKEN)

        res.json({...rest, accessToken});

    } catch (error) {
        console.log(error);
    }
});

module.exports = loginHandler;