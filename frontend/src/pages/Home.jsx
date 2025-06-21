import React from 'react';

function Home() {
  return (
    <section className="text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight mb-6 animate-fade-in">
        Trade Skills, Not Money
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed">
        SkillSwap is your vibrant, AI-powered skill exchange where creativity meets collaboration. Whether you're a designer, coder, or content creator — swap your strengths and spark new partnerships.
      </p>
      <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-transform">
        ✨ Get Started
      </button>
    </section>
  );
}

export default Home;