const express = require("express");
const router = express.Router();
const Application = require("../models/applicationModel");

router.post("/apply", async (req, res) => {
  try {

    const newApplication = new Application(req.body);
    await newApplication.save();

    res.json({
      success: true,
      message: "Application submitted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;