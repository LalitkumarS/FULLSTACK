import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToLessons = (selectedLanguage) => {
    navigate('/lessons', { state: { language: selectedLanguage } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold mb-10">Welcome to LinguaMaster</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Start Lesson Card */}
          <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
            <h2 className="text-3xl font-bold mb-2">Select Language to Start Lesson</h2>
            <div className="flex flex-col space-y-4 mt-4">
              {/* List of languages */}
              {['Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Kannada', 'Odia', 'Malayalam', 'Punjabi', 'Assamese', 'Konkani'].map((language) => (
                <button
                  key={language}
                  onClick={() => goToLessons(language)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

         


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
