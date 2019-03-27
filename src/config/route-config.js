module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const tipiRoutes = require("../routes/tipis");
    const userRoutes = require("../routes/users");

    app.use(staticRoutes);
    app.use(tipiRoutes);
    app.use(userRoutes);
  }
};
