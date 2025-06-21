import React from 'react';
import UserCard from '../components/UserCard';

const sampleUsers = [
  { name: 'Alice', skillOffer: 'UI/UX Design', skillWant: 'React.js Help' },
  { name: 'Bob', skillOffer: 'Python Scripting', skillWant: 'Logo Design' },
  { name: 'Charlie', skillOffer: 'Video Editing', skillWant: 'Webflow Expert' },
];

function Match() {
  return (
    <section className="px-4">
      <h2 className="text-3xl font-bold text-center sm:text-left text-slate-800 mb-8">🔗 Live Skill Matches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleUsers.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </section>
  );
}

export default Match;