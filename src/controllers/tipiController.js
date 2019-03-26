const tipiQueries = require("../db/queries.tipis.js");

module.exports = {
  index(req, res, next) {
    tipiQueries.getAllTipis((err, tipis) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("tipis/index", { tipis });
      }
    });
  }
};
