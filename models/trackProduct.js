const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  userMail: {
    type: String,
    required: true,
  },

  productLink: {
    type: String,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

  productPrice: {
    type: Number,
    required: true,
  },
});

const trackModel = mongoose.model("trackModel", trackSchema);

module.exports = { trackModel };
