const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  image: String,
  city: String,
  price: Number,
  description: String
});

module.exports = mongoose.model("City", citySchema);
