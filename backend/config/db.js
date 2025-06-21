const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;
    if (!dbURI) {
      throw new Error('DB_URI not found in environment variables');
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;