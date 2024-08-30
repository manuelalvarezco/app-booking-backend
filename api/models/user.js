const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  fullName: {
    type: String,
  },
  birthday: {
    type: String,
  },
  gender: {
    type: String,
  },
  documentType: {
    type: String,
  },
  document: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
  contactName: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true
  }
})

module.exports = model('User', UserSchema );
