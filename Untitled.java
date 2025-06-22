import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate px-6 py-24 lg:py-32 text-center max-w-6xl mx-auto overflow-hidden">
      {/* ✨ Background Glow */}
      <div className="absolute -top-40 left-1/2 -z-10 transform -translate-x-1/2 blur-3xl opacity-30">
        <div className="aspect-square w-[70rem] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
      </div>

      {/* 🎯 Main Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight mb-6 animate-fade-up">
        Trade Skills, Not Money
      </h1>

      {/* 📝 Description */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-up delay-100">
        SkillSwap is your vibrant, AI-powered skill exchange where creativity meets collaboration. 
        Whether you're a designer, coder, or content creator — swap your strengths and spark new partnerships.
      </p>

      {/* 🚀 CTA Button */}
      <button
        onClick={() => navigate('/login')}
        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300"
      >
        ✨ Get Started
      </button>

      {/* 🔥 Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-50 via-yellow-100 to-white dark:from-yellow-900/30 dark:to-yellow-800/40 border border-yellow-200 dark:border-yellow-700 transition-transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300">🤝 Match Instantly</h3>
          <p className="text-sm text-yellow-900 dark:text-yellow-100 mt-2">Find perfect skill partners in real time.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-pink-50 via-pink-100 to-white dark:from-pink-900/30 dark:to-pink-800/40 border border-pink-200 dark:border-pink-700 transition-transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-300">🔗 Seamless Connections</h3>
          <p className="text-sm text-pink-900 dark:text-pink-100 mt-2">
            Instantly chat and connect with your matches using our built-in messenger.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-white dark:from-blue-900/30 dark:to-blue-800/40 border border-blue-200 dark:border-blue-700 transition-transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">📈 Skill Growth</h3>
          <p className="text-sm text-blue-900 dark:text-blue-100 mt-2">
            Learn faster through hands-on exchanges with like-minded people.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
