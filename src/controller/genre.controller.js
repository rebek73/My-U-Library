const Genre = require('../models/genre.model');

const genreHandler = async(req, res) => {
    try{
        const genres = await Genre.find({});
        res.json(genres);
    }catch(error){
        res.status(404).json({message: 'Could not find genres'});
    }
}

module.exports = genreHandler;