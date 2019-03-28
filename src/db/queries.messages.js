const Message = require("./models").Message;
const Tipi = require("./models").Tipi;
const User = require("./models").User;

module.exports = {
  createMessage(newMessage, callback) {
    return Message.create(newMessage)
      .then(message => {
        callback(null, message);
      })
      .catch(err => {
        callback(err);
      });
  }
};
