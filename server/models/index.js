var db = require('../db');

module.exports = {
  messages: {
    // get and post take a call back to execute the data 
    get: function (callback) {
      // write db query 
      var dbQuery = '';
      // use query  and pass in the call back 
      db.query(dbQuery, function (error, result) {
        callback(error, results);
      });
    }, // a function which produces all the messages
    post: function (callback) {
      var dbQuery = '';
      db.query(dbQuery, function (error, result) {
        callback(error, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var dbQuery = '';
      db.query(dbQuery, function (error, result) {
        callback(error, results);
      });
    },
    post: function (callback) {
      var dbQuery = '';
      db.query(dbQuery, function (error, result) {
        callback(error, results);
      });
    }
  }
};