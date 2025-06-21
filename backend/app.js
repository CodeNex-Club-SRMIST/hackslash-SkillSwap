// backend/app.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Enable CORS for frontend
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*', // Change to your frontend domain in production
    methods: ['GET', 'POST'],
  },
});

// In-memory array to store users (for demo only)
const users = [];

io.on('connection', (socket) => {
  console.log('🟢 New connection:', socket.id);

  // Send all current users to newly connected client
  socket.emit('current-users', users);

  // Listen for new user profile submissions
  socket.on('new-user', (user) => {
    users.push(user);
    console.log('👤 User added:', user);
    io.emit('user-added', user); // Broadcast new user to all clients
  });

  // Handle optional chat room joining
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`📞 ${socket.id} joined room ${roomId}`);
  });

  // Handle optional chat messages
  socket.on('send-message', ({ roomId, message }) => {
    io.to(roomId).emit('receive-message', message);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id);
  });
});

// Basic route
app.get('/', (req, res) => {
  res.send('SkillSwap WebSocket server is running 🎯');
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});