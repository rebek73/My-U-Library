const express = require('express');
const User = require('../../models/user.model');
const users = require('../../data/user');

const router = express.Router();

router.route("/").post(async (req, res) => {
    try{
        //await User.remove();
        const usersInDB = await User.insertMany(users.data);
        res.json(usersInDB);
    }catch(error){
        console.log(error);
        res.json({message: 'Could not add users to the database'});
    }
})

module.exports = router;