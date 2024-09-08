const express = require("express");
const router = express.Router();

const contactController = require("./contactController");

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("./contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
