const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// const contactController = require('.contactController/../controllers/contactController');


router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
