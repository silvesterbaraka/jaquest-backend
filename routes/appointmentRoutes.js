const express = require("express");
const router = express.Router();

const Appointment = require("../models/appointmentModel");

router.post("/appointments", async (req, res) => {

  try {

    const appointment = new Appointment(req.body);

    await appointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment booked successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

module.exports = router;