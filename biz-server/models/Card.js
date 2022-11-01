const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    minlength: 2,
    required: true,
  },
  description: {
    type: String,
    minlength: 6,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card;
