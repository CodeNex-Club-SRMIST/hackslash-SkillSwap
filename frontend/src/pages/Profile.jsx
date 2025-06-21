import React from 'react';

function Profile() {
  return (
    <section className="max-w-2xl w-full px-4 mx-auto">
      <h2 className="text-4xl font-extrabold text-slate-800 mb-8 text-center sm:text-left">🧠 Your Skill Profile</h2>
      <form className="space-y-6 bg-white shadow-xl rounded-2xl p-6 border border-slate-200">
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Your Name</label>
          <input type="text" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="e.g., Jane Creator" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Skill You Offer</label>
          <input type="text" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="e.g., Motion Design" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Skill You Want</label>
          <input type="text" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="e.g., Full-stack Development" />
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all">
          💾 Save Profile
        </button>
      </form>
    </section>
  );
}

export default Profile;