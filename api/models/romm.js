const { Schema, model } = require('mongoose');

const RommSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rommType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Romm', RommSchema);
