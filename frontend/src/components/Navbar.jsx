import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const isLoggedIn = !!localStorage.getItem('token');
  const userName = localStorage.getItem('loggedInUser');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

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
          <li>
            <Link
              to="/"
              className={`hover:text-yellow-300 ${isActive('/') ? 'text-yellow-300 font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <Link
                  to="/match"
                  className={`hover:text-yellow-300 ${isActive('/match') ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  Matches
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={`hover:text-yellow-300 ${isActive('/profile') ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`hover:text-yellow-300 ${isActive('/dashboard') ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-red-400 text-white">
                  Logout
                </button>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li>
                <Link
                  to="/login"
                  className={`hover:text-yellow-300 ${isActive('/login') ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`hover:text-yellow-300 ${isActive('/signup') ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
