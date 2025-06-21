import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data));
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users</h1>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} - {u.skillsOffered.join(', ')}</li>)}
      </ul>
    </div>
  );
}