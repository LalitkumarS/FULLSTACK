import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle login/signup logic, e.g., API call.
    
    // Assuming login/signup is successful:
    navigate('/languageselection'); // Redirect to the dashboard on success
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex justify-center items-center text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          {isSignUp ? 'Create an Account' : 'Login to LinguaMaster'}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter username"
                required // Ensure that the input is required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter email"
              required // Ensure that the input is required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter password"
              required // Ensure that the input is required
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button onClick={toggleSignUp} className="text-blue-500 underline">
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button onClick={toggleSignUp} className="text-blue-500 underline">
                Sign Up
              </button>
            </p>
          )}
        </div>

        <Link to="/" className="text-blue-600 mt-4 block text-center underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginSignUp;
