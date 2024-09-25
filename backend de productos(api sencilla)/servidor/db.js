const mysql = require('promise-mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const getConnection = async ()=> await connection;

module.exports = { 
    getConnection
}