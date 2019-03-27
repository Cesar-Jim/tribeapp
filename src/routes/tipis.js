const express = require("express");
const router = express.Router();

const validation = require("./validation");

const tipiController = require("../controllers/tipiController");

router.get("/tipis", tipiController.index);
router.get("/tipis/new", tipiController.new);
router.post("/tipis/create", validation.validateTipis, tipiController.create);
router.get("/tipis/:id", tipiController.show);
router.post("/tipis/:id/destroy", tipiController.destroy);
router.get("/tipis/:id/edit", tipiController.edit);
router.post(
  "/tipis/:id/update",
  validation.validateTipis,
  tipiController.update
);

module.exports = router;
