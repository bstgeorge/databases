var db = require('../db').dbConnection;
const Message = require('../sequelize').Message;
module.exports = {
  getAll: function () {
    return new Promise ((resolve, reject) => {
      Message.sync().then(() => {
        return Message.findAll({});
      }).then((messages) => {
        resolve(messages);
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
      // db.query('SELECT * FROM messages;', (err, result, fields) => {
      //   if (err) {
      //     reject(err);
      //     throw err;
      //   }
      //   resolve(result, fields);
      // });
    });
  }, // a function which produces all the messages
  create: function (username, message, roomname) {
    return new Promise ((resolve, reject) => {
      Message.sync().then(() => {
        return Message.create({user: username, content: message, room: roomname});
      }).then(() => {
        resolve();
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
      // let values = '("' + username + '","' + message + '","' + roomname + '")';
      // db.query('INSERT INTO messages (user, content, room) VALUES ' + values, (err, result) => {
      //   if (err) {
      //     reject(err);
      //     throw err;
      //   }
      //   resolve(result);
      // });
    });
  } // a function which can be used to insert a message into the database
};


// simple query
// db.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );