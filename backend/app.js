require('dotenv').config(); // Load environment variables
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const ChatMessage = require('./models/ChatMessage');

const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Set up Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // Set this to your frontend domain in production
    methods: ['GET', 'POST'],
  },
});

// In-memory user list (demo-only)
const users = [];

io.on('connection', (socket) => {
  console.log('🟢 New connection:', socket.id);

  // Send existing users to the new client
  socket.emit('current-users', users);

  // New user joins
  socket.on('new-user', (user) => {
    users.push(user);
    console.log('👤 User added:', user);
    io.emit('user-added', user); // Notify all clients
  });

  // Join a private room
  socket.on('join-room', async (roomId) => {
    socket.join(roomId);
    console.log(`📞 ${socket.id} joined room ${roomId}`);

    // Fetch chat history
    try {
      const messages = await ChatMessage.find({ roomId }).sort({ timestamp: 1 });
      socket.emit('chat-history', messages);
    } catch (err) {
      console.error('❌ Error loading chat history:', err);
    }
  });

  // When a user sends a message
  socket.on('send-message', async ({ roomId, message }) => {
    try {
      const saved = new ChatMessage({ ...message, roomId });
      await saved.save();

      // Broadcast to room
      socket.to(roomId).emit('receive-message', message);
    } catch (err) {
      console.error('❌ Error saving message:', err);
    }
  });

  // On disconnect
  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id);
  });
});

// Health check route
app.get('/', (req, res) => {
  res.send('SkillSwap WebSocket server is running 🎯');
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});