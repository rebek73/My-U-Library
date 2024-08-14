const Book = require('../models/book.model');

const singlebookHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        res.json(book);
    }catch(error){
        res.status(404).json({message: 'No book found'});
    }
}


module.exports = singlebookHandler;