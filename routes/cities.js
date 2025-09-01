const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

// GET /api/cities
router.get("/", cityController.getAllCities);

// POST /api/cities
router.post("/", cityController.addCity);

module.exports = router;
