var models = require('../models');

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get(function (error, result) {
        if (error) {
          console.log(erorr);
        }
        response.json(result);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      models.messages.get(function (error, result) {
        if (error) {
          console.log(erorr);
        }
        response.json(result);
      });

    },
    post: function (req, res) {

    }
  }
};

