module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const tipiRoutes = require("../routes/tipis");

    app.use(staticRoutes);
    app.use(tipiRoutes);
  }
};
