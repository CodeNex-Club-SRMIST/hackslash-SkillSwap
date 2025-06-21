import React, { useState, useEffect } from 'react';

function ChatBox({ user1, user2, socket }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const roomId = [user1, user2].sort().join('-');

  useEffect(() => {
    socket.emit('join-room', roomId);

    socket.on('receive-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, [roomId, socket]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const message = {
      user: user1,
      text: input,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit('send-message', { roomId, message });
    setMessages((prev) => [...prev, message]);
    setInput('');
  };

  return (
    <div className="bg-white dark:bg-slate-900 border rounded-xl shadow-lg p-4 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-3 text-slate-700 dark:text-white">💬 Chat with {user2}</h3>

      <div className="h-64 overflow-y-auto bg-slate-100 dark:bg-slate-800 p-3 rounded mb-3">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <span className="font-semibold">{msg.user}:</span>{' '}
            <span>{msg.text}</span>
            <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;