const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds `createdAt` and `updatedAt` fields

module.exports = mongoose.model('Message', MessageSchema);