const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ Initialize app FIRST

// Middleware
app.use(express.json());
app.use(cors());

// Root Test Route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Routes
app.use("/api/auth", require("./routes/auth"));

// ✅ MongoDB Connection (FIXED - no deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error:", err));

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});