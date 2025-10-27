import React, { useState } from 'react';
import socket from '../socket'; // or './socket' if you're in the same folder
import api from '../services/api';

function Profile() {
  const [name, setName] = useState('');
  const [skillOffer, setSkillOffer] = useState('');
  const [skillWant, setSkillWant] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !skillOffer || !skillWant) return;

    // Save to localStorage
    localStorage.setItem('skillOffer', skillOffer);
    localStorage.setItem('skillWant', skillWant);
    localStorage.setItem('profileName', name);

    // Send to backend
    try {
      await api.post('/profile', {
        userId: localStorage.getItem('userId'), // Ensure userId is set during login/signup
        name,
        skillOffer,
        skillWant,
      });
    } catch (error) {
      console.error('Error saving profile to backend:', error);
    }

    // Emit via socket
    socket.emit('new-user', { name, skillOffer, skillWant });

    // Reset form
    setName('');
    setSkillOffer('');
    setSkillWant('');
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="px-4 py-12 min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl transition">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800 dark:text-white">
          🎯 Create Your Skill Profile
        </h2>

        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-medium dark:bg-green-900 dark:text-green-300">
            ✅ Profile submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Saksham"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Skill You Offer
            </label>
            <input
              type="text"
              placeholder="e.g. React.js"
              value={skillOffer}
              onChange={(e) => setSkillOffer(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
              Skill You Want
            </label>
            <input
              type="text"
              placeholder="e.g. UI/UX Design"
              value={skillWant}
              onChange={(e) => setSkillWant(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform shadow-md hover:from-blue-700 hover:to-indigo-700"
          >
            🚀 Submit Profile
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;