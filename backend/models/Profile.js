const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Firebase UID or custom user ID
  name: { type: String, required: true },
  skillOffer: { type: String, required: true },
  skillWant: { type: String, required: true }
});

module.exports = mongoose.model('Profile', ProfileSchema);