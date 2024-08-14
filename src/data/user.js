const { v4: uuid } = require('uuid');

const users = {
    "data": [
        {
            id: uuid(),
            firstName: "Jane",
            lastName: "Smith",
            email: "janesmith73@example.com",
            password: "password456",
            role: "Student"
        },
        {
            id: uuid(),
            firstName: "Michael",
            lastName: "Johnson",
            email: "michaeljohnson42@example.com",
            password: "password789",
            role: "Student"
        },
        {
            id: uuid(),
            firstName: "Emily",
            lastName: "Brown",
              email: "emilybrown63@example.com",
            password: "password101",
            role: "Student"
        },
        {
            id: uuid(),
            firstName: "David",
            lastName: "Miller",
            email: "davidmiller54@example.com",
            password: "password111",
            role: "Librarian"
        }
    ]
}


module.exports = users;