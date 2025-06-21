import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with deployed backend URL

function Match() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get current users when connected
    socket.on('current-users', (data) => {
      setUsers(data);
    });

    // Listen for new users being added
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
      <h2 className="text-3xl font-bold text-center sm:text-left text-slate-800 dark:text-white mb-8">🔗 Live Skill Matches</h2>

      {users.length === 0 ? (
        <p className="text-center text-slate-500">Waiting for users to join...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <UserCard key={idx} user={user} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Match;