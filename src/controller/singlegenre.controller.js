const Genre = require('../models/genre.model');

const singlegenreHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const genre = await Genre.findById(id);
        res.json(genre);
    }catch(error){
        res.status(404).json({message: 'No genre found'});
    }
}


module.exports = singlegenreHandler;