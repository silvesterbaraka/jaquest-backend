const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const applicationRoutes = require("./routes/applicationRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api", applicationRoutes);
app.use("/api", appointmentRoutes);   // ← ADD THIS LINE

/* Test route */
app.get("/", (req, res) => {
  res.send("JAQuest backend running 🚀");
});

/* MongoDB connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});