import React, { useEffect, useState, useRef } from 'react';
import socket from '../socket';

function ChatBox({ user1, user2 }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  const roomId = [user1, user2].sort().join('-');

  useEffect(() => {
    socket.emit('join-room', roomId);

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
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    socket.emit('send-message', { roomId, message: msgObj });
    setChat((prev) => [...prev, msgObj]);
    setMessage('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-2xl rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold mb-4 text-center">
        💬 Chat with <span className="text-indigo-500">{user2}</span>
      </h3>

      <div className="h-72 overflow-y-auto px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 border dark:border-slate-700 scroll-smooth">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 flex ${
              msg.sender === user1 ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-xl shadow-sm text-sm ${
                msg.sender === user1
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-white text-slate-900 dark:bg-slate-700 dark:text-white rounded-bl-none'
              }`}
            >
              <p className="font-medium break-words">{msg.text}</p>
              <div className="text-[0.65rem] text-right mt-1 opacity-70">
                {msg.sender === user1 ? 'You' : msg.sender} • {msg.time}
              </div>
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
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition shadow"
        >
          ➤
        </button>
      </form>
    </div>
  );
}

export default ChatBox;