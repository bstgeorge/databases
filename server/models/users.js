var db = require('../db').dbConnection;
const User = require('../sequelize').User;
module.exports = {
  getAll: function () {
    return new Promise ((resolve, reject) => {
      // db.query('select * from users', (err, result) => {
      //   if (err) {
      //     reject(err);
      //     throw err;
      //   }
      //   resolve(result);
      // });
      User.sync().then(() => {
        return User.findAll({});
      }).then((users) => {
        resolve(users);
      }).catch((err) => {
        console.log(err);
        reject();
      });
    });
  },

  create: function (username) {
    return new Promise ((resolve, reject) => {
      User.sync().then(() => {
        return User.findOrCreate({ where: {username: username}, defaults: {
          username: username
        }});
      }).then((user, created) => {
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      });
      // db.query('SELECT username FROM users WHERE username = "' + username + '"', (err, res) => {
      //   if (err) {
      //     reject(err);
      //     throw err;
      //   }
      //   if (res.length === 1) {
      //     console.log('Username exists');
      //     resolve('Username exists');
      //     return;
      //   }
      //   db.query('INSERT INTO users (username) VALUES ("' + username + '")', (err, result) => {
      //     if (err) {
      //       console.log(err);
      //       reject(err);
      //       throw err;
      //     }
      //     resolve(result);
      //   });
      // });
    }); // a function which can be used to insert a message into the database
  }
};
