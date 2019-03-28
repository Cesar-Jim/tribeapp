module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const tipiRoutes = require("../routes/tipis");
    const userRoutes = require("../routes/users");
    const messageRoutes = require("../routes/messages");

    app.use(staticRoutes);
    app.use(tipiRoutes);
    app.use(userRoutes);
    app.use(messageRoutes);
  }
};
