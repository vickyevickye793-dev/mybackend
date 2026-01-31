const mysql = require('mysql2')

exports.connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vicky@6383',
    database:'user'
})

