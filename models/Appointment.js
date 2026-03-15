const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  purpose: String,
  countryCode: String,
  phone: String,
  date: String,
  time: String,
  message: String,
  timezone: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);