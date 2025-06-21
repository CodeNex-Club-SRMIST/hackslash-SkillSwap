import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Match from './pages/Match';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-100 text-gray-800">
        <Navbar />
        <main className="flex-grow w-full px-4 sm:px-6 lg:px-12 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/match" element={<Match />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
