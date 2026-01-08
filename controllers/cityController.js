const City = require("../models/City");

exports.getAllCities = async (req, res) => {
  try {
    const { limit, city, minPrice, maxPrice } = req.query;

    // Build a MongoDB query object
    let query = {};

    if (city) {
      // Case-insensitive exact match
      query.city = { $regex: new RegExp(`^${city}$`, "i") };
    }

    if (minPrice) {
      query.price = query.price || {};
      query.price.$gte = parseFloat(minPrice);
    }

    if (maxPrice) {
      query.price = query.price || {};
      query.price.$lte = parseFloat(maxPrice);
    }

    // Execute query with optional limit
    const cities = await City.find(query).limit(parseInt(limit) || 0);
    res.json(cities);
  } catch (err) {
    console.error("❌ Failed to fetch cities:", err);
    res.status(500).json({ error: "Failed to fetch cities." });
  }
};

exports.addCity = async (req, res) => {
  try {
    const newCity = new City(req.body);
    try {
      const savedCity = await newCity.save();
      console.log("City saved to MongoDB:", savedCity);
      res.status(201).json(savedCity);
    } catch (saveErr) {
      console.error("❌ Error saving city to MongoDB:", saveErr);
      res.status(500).json({ error: "Failed to save city to MongoDB." });
    }
  } catch (err) {
    console.error("❌ Failed to add city:", err);
    res.status(500).json({ error: "Failed to add city." });
  }
};


exports.deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCity = await City.findByIdAndDelete(id);
    if (!deletedCity) {
      return res.status(404).json({ error: "City not found." });
    }
    console.log("City deleted from MongoDB:", deletedCity);
    res.json({ message: "City deleted successfully.", city: deletedCity });
  } catch (err) {
    console.error("❌ Failed to delete city:", err);
    res.status(500).json({ error: "Failed to delete city." });
  }
};