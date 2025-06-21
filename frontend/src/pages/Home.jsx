import React from 'react';

function Home() {
  return (
    <section className="relative isolate px-6 py-24 lg:py-32 text-center max-w-5xl mx-auto overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute -top-32 left-1/2 -z-10 transform -translate-x-1/2 blur-3xl opacity-20">
        <div className="aspect-[4/3] w-[60rem] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full" />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight mb-6 animate-fade-up">
        Trade Skills, Not Money
      </h1>

      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed animate-fade-up delay-150">
        SkillSwap is your vibrant, AI-powered skill exchange where creativity meets collaboration. Whether you're a designer, coder, or content creator — swap your strengths and spark new partnerships.
      </p>

      <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300">
        ✨ Get Started
      </button>
    </section>
  );
}

export default Home;