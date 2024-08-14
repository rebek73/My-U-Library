const { v4: uuid } = require('uuid');

const books = {
    "data": [
        {
            id: uuid(),
            title: "The Lord of the Rings",
            image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
            summary: "A young hobbit named Frodo Baggins inherits a simple gold ring and finds himself caught up in a perilous quest to destroy it.",
            author: "J.R.R. Tolkien",
            publishedYear: 1954,
            genre: "Fantasy",
            stock: 10
        },
        {
            id: uuid(),
            title: "To Kill a Mockingbird",
            image: "https://target.scene7.com/is/image/Target/GUEST_1607358e-8a84-4160-b93f-15b30b146a9f?wid=488&hei=488&fmt=pjpeg",
            summary: "A coming-of-age story set in the American South during the 1930s, exploring themes of racism and justice.",
            author: "Harper Lee",
            publishedYear: 1960,
            genre: "Classic",
            stock: 8
        },
        {
            id: uuid(),
            title: "1984",
            image: "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg",
            summary: "A dystopian novel depicting a totalitarian society where individuality and freedom are suppressed.",
            author: "George Orwell",
            publishedYear: 1949,
            genre: "Science Fiction",
            stock: 5
        },
        {
            id: uuid(),
            title: "Pride and Prejudice",
            image: "https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg",
            summary: "A witty and romantic novel about the Bennet sisters and their search for suitable husbands.",
            author: "Jane Austen",
            publishedYear: 1813,
            genre: "Romance",
            stock: 12
        },
        {
            id: uuid(),
            title: "The Catcher in the Rye",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/640px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
            summary: "A coming-of-age story narrated by Holden Caulfield, a troubled teenager.",
            author: "J.D. Salinger",
            publishedYear: 1951,
            genre: "Classic",
            stock: 7
        },
    ]
}


module.exports = books;