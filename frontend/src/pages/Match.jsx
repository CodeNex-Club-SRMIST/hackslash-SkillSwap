// src/pages/Match.jsx
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import ChatBox from '../components/ChatBox';
import socket from '../socket';

localStorage.setItem('skillSwapUser', name);
const currentUser = localStorage.getItem('skillSwapUser') || 'Guest'; // Get current user from localStorage
function Match() {
  const [users, setUsers] = useState([]);
  const [chatWith, setChatWith] = useState(null); // selected user to chat with

  useEffect(() => {
    // Get current user list
    socket.on('current-users', (data) => {
      setUsers(data);
    });

    // Listen for real-time additions
    socket.on('user-added', (user) => {
      setUsers((prev) => [...prev, user]);
    });

    return () => {
      socket.off('current-users');
      socket.off('user-added');
    };
  }, []);

  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center sm:text-left text-slate-800 dark:text-white mb-8">
        🔗 Live Skill Matches
      </h2>

      {chatWith && (
        <div className="mb-10">
          <ChatBox user1={currentUser} user2={chatWith} socket={socket} />
        </div>
      )}

      {users.length === 0 ? (
        <p className="text-center text-slate-500">Waiting for users to join...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <div key={idx} className="space-y-2">
              <UserCard user={user} />
              {user.name !== currentUser && (
                <button
                  onClick={() => setChatWith(user.name)}
                  className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  💬 Chat with {user.name}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Match;
