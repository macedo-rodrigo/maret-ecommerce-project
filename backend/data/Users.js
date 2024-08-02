const bcrypt = require('bcryptjs');

const users = [
  {
    name: "Rodrigo",
    lastName: "Macedo",
    email: "rodrigo.macedo@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Ana",
    lastName: "García",
    email: "ana.garcia@example.com",
    password: bcrypt.hashSync("abcdef", 10),
    isAdmin: false
  },
  {
    name: "Luis",
    lastName: "Martínez",
    email: "luis.martinez@example.com",
    password: bcrypt.hashSync("qwerty", 10),
    isAdmin: false
  },
  {
    name: "María",
    lastName: "López",
    email: "maria.lopez@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true
  },
  {
    name: "Jorge",
    lastName: "Pérez",
    email: "jorge.perez@example.com",
    password: bcrypt.hashSync("123abc", 10),
    isAdmin: false
  },
  {
    name: "Lucía",
    lastName: "Rodríguez",
    email: "lucia.rodriguez@example.com",
    password: bcrypt.hashSync("mypassword", 10),
    isAdmin: true
  },
  {
    name: "Carlos",
    lastName: "Sánchez",
    email: "carlos.sanchez@example.com",
    password: bcrypt.hashSync("654321", 10),
    isAdmin: false
  },
  {
    name: "Elena",
    lastName: "González",
    email: "elena.gonzalez@example.com",
    password: bcrypt.hashSync("securepass", 10),
    isAdmin: true
  },
  {
    name: "Manuel",
    lastName: "Fernández",
    email: "manuel.fernandez@example.com",
    password: bcrypt.hashSync("letmein", 10),
    isAdmin: false
  },
  {
    name: "Sofía",
    lastName: "Díaz",
    email: "sofia.diaz@example.com",
    password: bcrypt.hashSync("adminpass", 10),
    isAdmin: false
  }
];

module.exports = users;