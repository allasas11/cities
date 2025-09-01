const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const citiesRouter = require("./routes/cities");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());


app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Use cities routes
app.use("/api/cities", citiesRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});
