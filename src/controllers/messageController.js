const messageQueries = require("../db/queries.messages.js");

module.exports = {
  create(req, res, next) {
    let newMessage = {
      body: req.body.body,
      userId: req.user.id,
      tipiId: req.params.tipiId
    };

    messageQueries.createMessage(newMessage, (err, message) => {
      if (err) {
        req.flash("error", err);
      }
      res.redirect(req.headers.referer);
    });
  }
};
