import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:text-yellow-300 transition-colors"
        >
          SkillSwap
        </Link>

        <ul className="flex gap-6 text-sm sm:text-base font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'Matches', path: '/match' },
            { name: 'Profile', path: '/profile' },
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition-colors duration-200 hover:text-yellow-300 ${
                  isActive(link.path) ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;