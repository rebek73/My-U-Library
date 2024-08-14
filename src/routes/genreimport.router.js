const express = require('express');
const Genre = require('../models/genre.model');
const genres = require('../data/genre');

const router = express.Router();

router.route("/").post(async (req, res) => {
    try{
        //await Genre.remove();
        const genresInDB = await Genre.insertMany(genres.data);
        res.json(genresInDB);
    }catch(error){
        console.log(error);
        res.json({message: 'Could not add genres to the database'});
    }
})

module.exports = router;