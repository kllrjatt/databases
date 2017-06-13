var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// craete new connection . 
  // add username , password, database, no need to add local host 
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

// write connect function 
connection.connect(function (error) {
  // throw error is there is a error found, or else conenction will work 
  if (error) {
    throw error;
  } else {
    // log connection to server
    console.log('Connect to MySQL DBMS!');
  }
});

module.exports = connection;