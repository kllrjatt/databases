var models = require('../models');

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get(function (error, result) {
        if (error) {
          console.log(error);
        }
        response.json({ results: result });
        //response.end();
      });

    }, // a function which handles a get request for all messages
    post: function (request, response) {
      var parameters = [request.body.message, request.body.username, request.body.roomname];
      console.log('paramas:', parameters);
      models.messages.post(parameters, function (error, result) {
        if (error) {
          console.log(error);
        }
        response.sendStatus(201);
        // response.end();
        //response.send(result);
      }); // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      models.users.get(function (error, result) {
        if (error) {
          console.log(erorr);
        }
        response.json({ results: result });
      });

    },
    post: function (request, response) {
      var parameters = [request.body.username];
      console.log('paramas for users:', parameters);
      models.users.post(parameters, function (error, result) {
        if (error) {
          console.log(error);
        }
        response.sendStatus(201);
        // response.end();
        //response.send(result);
      });
    }
  }
};

