const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  dob: {
    type: String
  },

  country: {
    type: String
  },

  phone: {
    type: String
  },

  alt_phone: {
    type: String
  },

  parent_name: {
    type: String
  },

  parent_contact: {
    type: String
  },

  referred_by: {
    type: String
  },

  message: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Application", applicationSchema);