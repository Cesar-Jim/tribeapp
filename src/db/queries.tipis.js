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
  },

  addTipi(newTipi, callback) {
    return Tipi.create({
      name: newTipi.name,
      description: newTipi.description
    })
      .then(tipi => {
        callback(null, tipi);
      })
      .catch(err => {
        callback(err);
      });
  },

  getTipi(id, callback) {
    return Tipi.findById(id)
      .then(tipi => {
        callback(null, tipi);
      })
      .catch(err => {
        callback(err);
      });
  },

  deleteTipi(id, callback) {
    return Tipi.destroy({
      where: { id }
    })
      .then(tipi => {
        callback(null, tipi);
      })
      .catch(err => {
        callback(err);
      });
  },

  updateTipi(id, updatedTipi, callback) {
    return Tipi.findById(id).then(tipi => {
      if (!tipi) {
        return callback("Tipi not found");
      }

      tipi
        .update(updatedTipi, {
          fields: Object.keys(updatedTipi)
        })
        .then(() => {
          callback(null, tipi);
        })
        .catch(err => {
          callback(err);
        });
    });
  }
};
