const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: '*', // Replace with frontend URL in production
    methods: ['GET', 'POST']
  }
});

let users = [];

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Send all current users to the newly connected client
  socket.emit('current-users', users);

  // Receive new match
  socket.on('new-user', (user) => {
    users.push(user);
    io.emit('user-added', user); // broadcast to everyone
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    // Optionally remove user based on socket.id
  });
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});