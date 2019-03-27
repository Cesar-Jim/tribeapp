module.exports = {
  validateTipis(req, res, next) {
    if (req.method === "POST") {
      req
        .checkBody("name", "must be at least 3 characters in length")
        .isLength({ min: 3 });
      req
        .checkBody("description", "must be at least 10 characters in length")
        .isLength({ min: 10 });
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
      return res.redirect(303, req.headers.referer);
    } else {
      return next();
    }
  }
};
