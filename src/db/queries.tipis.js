const Tipi = require("./models").Tipi;

module.exports = {
  getAllTipis(callback) {
    return Tipi.all()

      .then(tipis => {
        callback(null, tipis);
      })
      .catch(err => {
        callback(err);
      });
  }
};
