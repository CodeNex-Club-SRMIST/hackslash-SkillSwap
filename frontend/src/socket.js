// src/socket.js
import { io } from 'socket.io-client';

// ✅ Create a singleton socket instance
const socket = io('http://localhost:5000', {
  transports: ['websocket'],
  autoConnect: true,
});

export default socket;
