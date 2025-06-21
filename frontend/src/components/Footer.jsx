import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center py-6 mt-12 shadow-inner">
      <p className="text-sm">© {new Date().getFullYear()} SkillSwap. Empowering People Through Skills ✨</p>
    </footer>
  );
}

export default Footer;