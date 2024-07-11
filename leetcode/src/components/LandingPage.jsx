import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    let navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to LeetCode Tracker
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Keep track of your LeetCode progress effortlessly
          </p>
          <div className="mb-8">
            <img
              src="/leetcode.svg"  
              alt="LeetCode Logo"
              className="h-20 sm:h-24 mx-auto"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Download Extension
            </a>
            <button
              onClick={() => navigate('/login')}
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
        <div className="mt-12">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
    Features
  </h2>
  <ul className="text-lg text-gray-700">
    <li className="mb-4">
      Track your LeetCode questions easily
    </li>
    <li className="mb-4">
      Organize and revise your tracked questions efficiently
    </li>
    <li className="mb-4">
      Seamlessly review your progress and performance
    </li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default LandingPage;
