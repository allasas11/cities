const City = require("../models/City");

// Get all cities
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    console.error("❌ Failed to fetch cities:", err);
    res.status(500).json({ error: "Failed to fetch cities." });
  }
};

// Add a new city
exports.addCity = async (req, res) => {
  try {
    const newCity = new City(req.body);
    await newCity.save();
    res.status(201).json(newCity);
  } catch (err) {
    console.error("❌ Failed to add city:", err);
    res.status(500).json({ error: "Failed to add city." });
  }
};
