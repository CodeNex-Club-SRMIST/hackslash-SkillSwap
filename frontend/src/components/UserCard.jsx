import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

function UserCard({ user }) {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-slate-200 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 p-4 rounded-full shadow-md">
          <FaUserAstronaut className="text-white text-2xl" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{user.name}</h3>
          <p className="text-slate-600 mt-1">🎯 <span className="font-medium text-slate-800">{user.skillOffer}</span></p>
          <p className="text-slate-600">🔍 <span className="font-medium text-slate-800">{user.skillWant}</span></p>
        </div>
      </div>
      <button className="mt-6 w-full py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-xl shadow hover:from-indigo-600 hover:to-blue-700 transition-all">Connect Now 🚀</button>
    </div>
  );
}

export default UserCard;