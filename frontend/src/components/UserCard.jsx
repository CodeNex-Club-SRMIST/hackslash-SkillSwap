import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

function UserCard({ user }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-4 rounded-full shadow-lg">
          <FaUserAstronaut className="text-white text-3xl" />
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 tracking-tight">
            {user.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            🎯 <span className="font-medium text-slate-900 dark:text-white">{user.skillOffer}</span>
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            🔍 <span className="font-medium text-slate-900 dark:text-white">{user.skillWant}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;