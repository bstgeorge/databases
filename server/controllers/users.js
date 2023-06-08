var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll().then((result, fields) => {
      res.send(result);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let obj = req.body;
    models.users.create(obj.username).then((result) => {
      res.send(result);
    }).catch ((err) => {
      console.log(err);
      res.sendStatus(404);
    });
  } // a function which handles posting a message to the database
};
