import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-8 mt-20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-2 tracking-wide">
          SkillSwap — Empowering People Through Skills ✨
        </h2>
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} SkillSwap. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-300 hover:text-white transition-colors">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;