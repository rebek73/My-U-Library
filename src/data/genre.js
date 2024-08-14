const { v4: uuid } = require('uuid');

const genres = {
    "data": [
        {
            id: uuid(),
            genre: "Action"
        },
        {
            id: uuid(),
            genre: "Adventure"
        },
        {
            id: uuid(),
            genre: "Comedy"
        },
        {
            id: uuid(),
            genre: "Classic"
        },
        {
            id: uuid(),
            genre: "Drama"
        },
        {
            id: uuid(),
            genre: "Fantasy"
        },
        {
            id: uuid(),
            genre: "Horror"
        },
        {
            id: uuid(),
            genre: "Mystery"
        },
        {
            id: uuid(),
            genre: "Romance"
        },
        {
            id: uuid(),
            genre: "Science Fiction"
        },
        {
            id: uuid(),
            genre: "Thriller"
        },
        {
            id: uuid(),
            genre: "Western"
        }
    ]
}


module.exports = genres;
