import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkillSuggestion from '../components/SkillSuggestion';
import ChatAssistant from '../components/ChatAssistant';

function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('loggedInUser') || 'User';
  const [skillOffer, setSkillOffer] = useState('Loading...');
  const [skillWant, setSkillWant] = useState('Loading...');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setSkillOffer('Not available');
        setSkillWant('Not available');
        return;
      }

      try {
        const res = await fetch(`http://localhost:5000/api/profile/${userId}`);
        const data = await res.json();

        if (data.success) {
          setSkillOffer(data.profile.skillOffer);
          setSkillWant(data.profile.skillWant);
        } else {
          setSkillOffer('Not available');
          setSkillWant('Not available');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setSkillOffer('Error loading');
        setSkillWant('Error loading');
      }
    };

    fetchProfile();
  }, []);

  return (
    <section className="min-h-screen px-6 py-10 bg-gradient-to-tr from-indigo-900 via-slate-800 to-black text-white">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">👤 Welcome, {userName}</h2>

        <div className="mb-6 space-y-2">
          <p><strong>Skill You Offer:</strong> {skillOffer}</p>
          <p><strong>Skill You Want:</strong> {skillWant}</p>
        </div>

        <div className="flex gap-4 mb-8">
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

        {/* 🔍 Smart Suggestions */}
        <SkillSuggestion offeredSkill={skillOffer} wantedSkill={skillWant} />

        {/* 💬 Chat Assistant */}
        <ChatAssistant />
      </div>
    </section>
  );
}

export default Dashboard;