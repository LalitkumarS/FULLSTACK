import React from 'react';
import { useNavigate } from 'react-router-dom';

// List of languages
const languages = [
  'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 
  'Urdu', 'Gujarati', 'Kannada', 'Odia', 'Malayalam', 
  'Punjabi', 'Assamese', 'Konkani'
];

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageClick = (language) => {
    // Navigating to Lessons page with the selected language
    navigate(`/lessons/${language.toLowerCase()}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {languages.map((language, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div 
              className="card shadow text-center p-3" 
              onClick={() => handleLanguageClick(language)}  // Navigate directly to lessons page
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h5 className="card-title">{language}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
