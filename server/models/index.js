var db = require('../db');

module.exports = {
  messages: {
    // get and post take a call back to execute the data 
    get: function (callback) {
      // write db query 
      var dbQuery = 'select messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userid = users.id) order by messages.id desc;';
      // use query  and pass in the call back 
      db.query(dbQuery, function (error, result) {
        callback(error, result);
      });
    }, // a function which produces all the messages
    post: function (callback) {
      var dbQuery = 'insert into messages (text, userid, roomname) value (?,(select id from users where username = ?),?);';
      db.query(dbQuery, parameters, function (error, result) {
        callback(error, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var dbQuery = 'select * from users';
      db.query(dbQuery, function (error, result) {
        callback(error, result);
      });
    },
    post: function (callback) {
      var dbQuery = 'insert into users (username) value (?);';
      db.query(dbQuery, parameters, function (error, result) {
        callback(error, result);
      });
    }
  }
};