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
  },

  validateUsers(req, res, next) {
    if (req.method === "POST") {
      req
        .checkBody("name", "must be at least 3 characters in length")
        .isLength({ min: 3 });
      req.checkBody("email", "must be valid").isEmail();
      req
        .checkBody("password", "must be at least 6 characters in length")
        .isLength({ min: 6 });
      req
        .checkBody("passwordConfirmation", "must match password provided")
        .optional()
        .matches(req.body.password);
    }

    const errors = req.validationErrors();

    if (errors) {
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  },

  validateMessages(req, res, next) {
    if (req.method === "POST") {
      req.checkBody("body", "must not be empty").notEmpty();
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
    } else {
      return next();
    }
  }
};
