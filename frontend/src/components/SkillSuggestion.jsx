import React, { useState } from 'react';
import api from '../services/api';

function SkillSuggestion({ offeredSkill, wantedSkill }) {
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const { data } = await api.post('/ai/skill-match', { offeredSkill, wantedSkill });
      setSuggestions(data.suggestions || 'No suggestions found.');
    } catch {
      setSuggestions('⚠️ Error fetching suggestions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg mt-6">
      <h3 className="text-xl font-semibold mb-2">🤝 Smart Match Suggestions</h3>
      <button
        onClick={fetchSuggestions}
        className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        🔍 Generate Suggestions
      </button>
      <p className="mt-3 whitespace-pre-wrap">{loading ? '⏳ Loading...' : suggestions}</p>
    </div>
  );
}

export default SkillSuggestion;