const Profile = require('../models/Profile');

exports.saveProfile = async (req, res) => {
  const { email, skillsOffered, skillsWanted } = req.body;
  try {
    const existing = await Profile.findOne({ userId: req.user.id });

    if (existing) {
      existing.email = email;
      existing.skillsOffered = skillsOffered;
      existing.skillsWanted = skillsWanted;
      await existing.save();
      return res.json({ message: 'Profile updated successfully' });
    }

    await Profile.create({ userId: req.user.id, email, skillsOffered, skillsWanted });
    res.json({ message: 'Profile created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};