const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Save or Update Profile
router.post('/', async (req, res) => {
  const { userId, name, skillOffer, skillWant } = req.body;
  if (!userId || !name || !skillOffer || !skillWant) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const profile = await Profile.findOneAndUpdate(
      { userId },
      { name, skillOffer, skillWant },
      { upsert: true, new: true }
    );
    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get Current User Profile
router.get('/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;