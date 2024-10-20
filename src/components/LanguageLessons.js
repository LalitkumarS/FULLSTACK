import React from 'react';
import { Link, useParams } from 'react-router-dom';
import lessonsData from '../data/lessonsData.json'; // Import the lesson data

const LanguageLessons = () => {
  const { language } = useParams(); // Get the selected language from URL parameters
  const lessons = lessonsData[language]?.lessons; // Fetch lessons for the selected language

  if (!lessons || lessons.length === 0) {
    return (
      <div className="text-center text-white">
        <h2>No lessons available for this language.</h2>
        <Link to="/quiz" className="btn btn-primary mt-4">Attend Quiz</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {lessons.map((lesson, index) => (
        <div key={index} className="bg-white text-black rounded-lg shadow-lg p-4">
          <Link to={`/lessons/${language}/${index}`} className="text-xl font-bold">{lesson.title}</Link>
          <p>{lesson.content.substring(0, 100)}...</p> {/* Display part of the lesson content */}
        </div>
      ))}
    </div>
  );
};

export default LanguageLessons;
