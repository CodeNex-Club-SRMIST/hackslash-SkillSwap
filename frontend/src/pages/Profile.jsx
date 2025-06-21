import React from 'react';

function Profile() {
  return (
    <section className="max-w-2xl w-full px-4 py-20 mx-auto">
      <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-10 text-center sm:text-left tracking-tight">
        🧠 Your Skill Profile
      </h2>

      <form className="space-y-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl p-8 transition-all duration-300">
        {/* Name Field */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="e.g., Jane Creator"
            className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Skill Offer */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
            Skill You Offer
          </label>
          <input
            type="text"
            placeholder="e.g., Motion Design"
            className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Skill Want */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
            Skill You Want
          </label>
          <input
            type="text"
            placeholder="e.g., Full-stack Development"
            className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          💾 Save Profile
        </button>
      </form>
    </section>
  );
}

export default Profile;