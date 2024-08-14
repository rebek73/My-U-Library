const User = require('../models/user.model'); // Import the correct model

const getAllUserHandler = async (req, res) => {
        try{
            const users = await User.find({});
            res.json(users);
        }catch(error){
            res.status(404).json({message: 'Could not find users'});
        }
    }
    
module.exports = getAllUserHandler;