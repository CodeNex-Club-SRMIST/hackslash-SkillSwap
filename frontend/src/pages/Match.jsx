import React from 'react';
import UserCard from '../components/UserCard';

const sampleUsers = [
  { name: 'Alice', skillOffer: 'UI/UX Design', skillWant: 'React.js Help' },
  { name: 'Bob', skillOffer: 'Python Scripting', skillWant: 'Logo Design' },
  { name: 'Charlie', skillOffer: 'Video Editing', skillWant: 'Webflow Expert' },
];

function Match() {
  return (
    <section className="relative px-4 py-20 min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Decorative Background */}
      <div className="absolute inset-x-0 top-0 -z-10 overflow-hidden blur-2xl">
        <div className="w-full h-96 bg-gradient-to-tr from-purple-300 via-indigo-300 to-blue-300 dark:from-indigo-800 dark:via-purple-800 dark:to-blue-800 opacity-30 rounded-full mx-auto"></div>
      </div>

      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-slate-800 dark:text-white mb-10 tracking-tight">
        🔗 Live Skill Matches
      </h2>

      <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
        Explore real-time skill exchange opportunities. Find someone who needs your expertise — and can teach you theirs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
        {sampleUsers.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </section>
  );
}

export default Match;