import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('loggedInUser') || 'User';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <section className="min-h-screen px-6 py-10 bg-gradient-to-tr from-indigo-900 via-slate-800 to-black text-white">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">👤 Welcome, {userName}</h2>

        <div className="mb-6 space-y-2">
          <p><strong>Email:</strong> (we'll add this soon)</p>
          <p><strong>Skills Offered:</strong> (from profile)</p>
          <p><strong>Skills Wanted:</strong> (from profile)</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/profile')}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-semibold"
          >
            ✏️ Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold"
          >
            🔒 Logout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
