var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log('Connect to MySQL DBMS!');
  }
});

modules.exports = connection;