// frontend/src/components/ChatBox.jsx
import React, { useEffect, useState, useRef } from 'react';
import socket from '../socket';

function ChatBox({ user1, user2 }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  const roomId = [user1, user2].sort().join('-'); // Unique, consistent room ID

  useEffect(() => {
    // Join the room for this pair
    socket.emit('join-room', roomId);

    // Listen for incoming messages
    socket.on('receive-message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, [roomId]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msgObj = {
      sender: user1,
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    socket.emit('send-message', {
      roomId,
      message: msgObj,
    });

    setChat((prev) => [...prev, msgObj]);
    setMessage('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-xl p-4 mb-6 border border-slate-300 dark:border-slate-700">
      <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
        💬 Chat with {user2}
      </h3>

      <div className="h-64 overflow-y-auto px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded mb-4 scroll-smooth">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.sender === user1 ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === user1
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-300 text-slate-900 dark:bg-slate-600 dark:text-white'
              }`}
            >
              <p className="font-medium">{msg.text}</p>
              <span className="block text-[0.7rem] opacity-70 mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 rounded border dark:border-slate-600 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;