const express = require("express");
const router = express.Router();

const CitiesController = require("../controllers/cities");

router.get("/", CitiesController.getData);

module.exports = router;
