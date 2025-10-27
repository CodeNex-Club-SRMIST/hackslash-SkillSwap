// src/socket.js
import { io } from 'socket.io-client';

// Create backend origin from VITE_API_URL (strip trailing /api if present)
const apiUrl = import.meta.env.VITE_API_URL;
const backendOrigin = apiUrl
  ? apiUrl.replace(/\/api\/?$/, '')
  : 'http://localhost:5000';

// ✅ Create a singleton socket instance that works in both dev and production
const socket = io(backendOrigin, {
  transports: ['websocket'],
  autoConnect: true,
});

export default socket;
