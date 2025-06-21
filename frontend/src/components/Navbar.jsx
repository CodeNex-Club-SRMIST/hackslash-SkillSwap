import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">SkillSwap</Link>
        <ul className="flex space-x-6 text-md font-medium">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/match" className="hover:text-yellow-300">Matches</Link></li>
          <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;