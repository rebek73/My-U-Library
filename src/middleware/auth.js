const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
            if(error)
                res.status(403).json({message: 'Invalid token'});
            req.user = user;
            next();
        })
    }
}


module.exports = auth;