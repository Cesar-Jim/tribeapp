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
  },

  new(req, res, next) {
    res.render("tipis/new");
  },

  create(req, res, next) {
    let newTipi = {
      name: req.body.name,
      description: req.body.description
    };
    tipiQueries.addTipi(newTipi, (err, tipi) => {
      if (err) {
        res.redirect(500, "/tipis/new");
      } else {
        res.redirect(303, `/tipis/${tipi.id}`);
      }
    });
  },

  show(req, res, next) {
    tipiQueries.getTipi(req.params.id, (err, tipi) => {
      if (err || tipi == null) {
        res.redirect(404, "/");
      } else {
        res.render("tipis/show", { tipi });
      }
    });
  },

  destroy(req, res, next) {
    tipiQueries.deleteTipi(req.params.id, (err, tipi) => {
      if (err) {
        res.redirect(500, `/tipis/${tipi.id}`);
      } else {
        res.redirect(303, "/tipis");
      }
    });
  },

  edit(req, res, next) {
    tipiQueries.getTipi(req.params.id, (err, tipi) => {
      if (err || tipi == null) {
        res.redirect(404, "/");
      } else {
        res.render("tipis/edit", { tipi });
      }
    });
  },

  update(req, res, next) {
    tipiQueries.updateTipi(req.params.id, req.body, (err, tipi) => {
      if (err || tipi == null) {
        res.redirect(404, `/tipis/${req.params.id}/edit`);
      } else {
        res.redirect(`/tipis/${tipi.id}`);
      }
    });
  }
};
