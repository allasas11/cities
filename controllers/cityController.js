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
