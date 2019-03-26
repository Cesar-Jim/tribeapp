const express = require("express");
const router = express.Router();

const tipiController = require("../controllers/tipiController");

router.get("/tipis", tipiController.index);

module.exports = router;
