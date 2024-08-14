const { v4: uuid } = require('uuid');

const users = {
    "data": [
        {
            id: uuid(),
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            password: "password123",
            role: "Student"
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            email: "janesmith@example.com",
            password: "password456",
            role: "Student"
        },
        {
            firstName: "Michael",
            lastName: "Johnson",
            email: "michaeljohnson@example.com",
            password: "password789",
            role: "Student"
        },
        {
            firstName: "Emily",
            lastName: "Brown",
              email: "emilybrown@example.com",
            password: "password101",
            role: "Student"
        },
        {
            firstName: "David",
            lastName: "Miller",
            email: "davidmiller@example.com",
            password: "password111",
            role: "Librarian"
        }
    ]
}


module.exports = users;