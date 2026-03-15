const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/appointments", async (req, res) => {
  try {

    const {
      name,
      email,
      purpose,
      countryCode,
      phone,
      date,
      time,
      message,
      timezone
    } = req.body;

    const newAppointment = new Appointment({
      name,
      email,
      purpose,
      countryCode,
      phone,
      date,
      time,
      message,
      timezone
    });

    await newAppointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment booked successfully"
    });

  } catch (error) {

    console.error("Error saving appointment:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }
});

module.exports = router;