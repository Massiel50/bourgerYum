const mysql = require("mysql");

var PORT = process.env.PORT || 8080;

let connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "Freaks505$",
    database: "burgerDB"
})

connection.connect(function(err){
    if(err) {
        console.log("Failed initital connection")
    }
    console.log("Connection initiated")
})

module.exports = connection;