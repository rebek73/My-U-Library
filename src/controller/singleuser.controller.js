const User = require('../models/user.model');

const singleuserHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.json(user);
    }catch(error){
        res.status(404).json({message: 'No user found'});
    }
}


module.exports = singleuserHandler;