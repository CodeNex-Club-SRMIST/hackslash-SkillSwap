import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">SkillSwap</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
          <Link to="/match" className="text-gray-700 hover:text-blue-600">Matches</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
