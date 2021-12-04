const mysql = require("mysql2");

const mysql_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "portfolio",
    password: "DummyPassword",
    multipleStatements: true,
});

mysql_connection.connect((err) => {
    if(!err){
        console.log("connected to database");
    }
    else{
        console.log(err);
        console.log("Nahi hua connect");
    }
});

module.exports = mysql_connection;