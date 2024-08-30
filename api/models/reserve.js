const { Schema, model } = require('mongoose');

const ReserveSchema = Schema({
  userId: {
    type: String,
    required: true
  },
  roomId: {
    type: String,
    required: true
  },
  hotelId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String,
    default: 'Pendiente'
  },
  active: {
    type: Boolean,
    default: true
  }
})

module.exports = model('Reserve', ReserveSchema );
