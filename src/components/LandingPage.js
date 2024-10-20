import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-400 to-purple-600 h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="animate-pulse absolute w-64 h-64 rounded-full bg-white opacity-20 filter blur-xl"></div>
        <div className="animate-pulse animation-delay-1000 absolute w-80 h-80 rounded-full bg-white opacity-15 filter blur-xl"></div>
        <div className="animate-pulse animation-delay-2000 absolute w-96 h-96 rounded-full bg-white opacity-10 filter blur-xl"></div>
      </div>
      
      <div className="bg-white bg-opacity-30 p-10 rounded-lg shadow-2xl text-center backdrop-blur-md max-w-lg transition duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-6xl font-extrabold mb-5 animate-bounce">Welcome to LinguaMaster</h1>
        <p className="text-xl mb-8">Master new languages at your own pace!</p>
        <Link to="/login">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110">
            Get Started
          </button>
        </Link>
      </div>
      
      <footer className="absolute bottom-5 text-sm">
        <p>&copy; 2024 LinguaMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
