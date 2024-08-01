const bcrypt = require('bcryptjs');

const users = [
  {
    name: "Rodrigo",
    lastName: "Macedo",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Ana",
    lastName: "García",
    password: bcrypt.hashSync("abcdef", 10),
    isAdmin: false
  },
  {
    name: "Luis",
    lastName: "Martínez",
    password: bcrypt.hashSync("qwerty", 10),
    isAdmin: false
  },
  {
    name: "María",
    lastName: "López",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true
  },
  {
    name: "Jorge",
    lastName: "Pérez",
    password: bcrypt.hashSync("123abc", 10),
    isAdmin: false
  },
  {
    name: "Lucía",
    lastName: "Rodríguez",
    password: bcrypt.hashSync("mypassword", 10),
    isAdmin: true
  },
  {
    name: "Carlos",
    lastName: "Sánchez",
    password: bcrypt.hashSync("654321", 10),
    isAdmin: false
  },
  {
    name: "Elena",
    lastName: "González",
    password: bcrypt.hashSync("securepass", 10),
    isAdmin: true
  },
  {
    name: "Manuel",
    lastName: "Fernández",
    password: bcrypt.hashSync("letmein", 10),
    isAdmin: false
  },
  {
    name: "Sofía",
    lastName: "Díaz",
    password: bcrypt.hashSync("adminpass", 10),
    isAdmin: false
  }
];

module.exports = users;