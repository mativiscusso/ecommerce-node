require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.PORT_DB,
    "dialect": "mysql",
    "define" : {
      "paranoid" : true
    }
  },
  "test": {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.PORT_DB,
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.PORT_DB,
    "dialect": "mysql",
  }
}
