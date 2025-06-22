import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate px-6 py-24 lg:py-32 text-center max-w-6xl mx-auto overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute -top-32 left-1/2 -z-10 transform -translate-x-1/2 blur-3xl opacity-20">
        <div className="aspect-[4/3] w-[60rem] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight mb-6 animate-fade-up">
        Trade Skills, Not Money
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed animate-fade-up delay-150">
        SkillSwap is your vibrant, AI-powered skill exchange where creativity meets collaboration.
        Whether you're a designer, coder, or content creator — swap your strengths and spark new partnerships.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/login")}
        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300"
      >
        ✨ Get Started
      </button>

      {/* Features Section with Colored Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        <div className="p-6 bg-gradient-to-tr from-yellow-100 via-yellow-50 to-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-yellow-800">🤝 Match Instantly</h3>
          <p className="text-sm text-yellow-900 mt-2">Find perfect skill partners in real time.</p>
        </div>
        <div className="p-6 bg-gradient-to-tr from-pink-100 via-pink-50 to-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-pink-800">🔗 Seamless Connections</h3>
          <p className="text-sm text-pink-900 mt-2">Instantly chat and connect with your matches using our built-in messenger.</p>
        </div>
        <div className="p-6 bg-gradient-to-tr from-blue-100 via-blue-50 to-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-blue-800">📈 Skill Growth</h3>
          <p className="text-sm text-blue-900 mt-2">Learn faster through practical exchanges.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
