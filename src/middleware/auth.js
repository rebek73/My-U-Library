const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({msg: 'No token, authorization denied'});
    
    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = decoded.user;
        next();
    }catch(error){
        res.status(401).json({msg: 'Token is not valid'});
    }
};


module.exports = auth;