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
    origin: '*', // Change this in production to your frontend domain
    methods: ['GET', 'POST'],
  },
});

// In-memory array to store users (demo-only)
const users = [];

io.on('connection', (socket) => {
  console.log('🟢 New connection:', socket.id);

  // Send all current users to newly connected client
  socket.emit('current-users', users);

  // New user joins
  socket.on('new-user', (user) => {
    users.push(user);
    console.log('👤 User added:', user);
    io.emit('user-added', user); // Broadcast to all clients
  });

  // Join private chat room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`📞 ${socket.id} joined room ${roomId}`);
  });

  socket.on('send-message', ({ roomId, message }) => {
    socket.to(roomId).emit('receive-message', message);
  });

  // On disconnect
  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id);
  });
});

// Test route
app.get('/', (req, res) => {
  res.send('SkillSwap WebSocket server is running 🎯');
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});