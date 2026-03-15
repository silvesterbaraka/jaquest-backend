const express = require("express");
const router = express.Router();
const multer = require("multer");
const Application = require("../models/applicationModel");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/apply",
  upload.fields([
    { name: "passport", maxCount: 1 },
    { name: "transcripts", maxCount: 1 },
    { name: "other_documents", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const newApplication = new Application({
        student_name: req.body.student_name,
        email: req.body.email,
        dob: req.body.dob,
        country: req.body.country,
        phone: req.body.phone,
        alt_phone: req.body.alt_phone,
        parent_name: req.body.parent_name,
        parent_contact: req.body.parent_contact,
        referred_by: req.body.referred_by,
        message: req.body.message
      });

      await newApplication.save();

      res.json({
        success: true,
        message: "Application submitted successfully"
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error"
      });
    }
  }
);

module.exports = router;