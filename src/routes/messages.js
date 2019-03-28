const express = require("express");
const router = express.Router();

const messageController = require("../controllers/messageController");
const validation = require("./validation");

router.post(
  "/tipis/:tipiId/messages/create",
  validation.validateMessages,
  messageController.create
);

module.exports = router;
