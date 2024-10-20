import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lessonsData from '../data/lessonsData.json'; // Ensure this contains lesson data for each language

const Lessons = () => {
  const { language } = useParams(); // Get the selected language from the URL
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    console.log("Selected language from URL:", language); // Debugging the language param
    if (lessonsData[language]) {
      console.log("Lessons found for language:", lessonsData[language].lessons); // Debugging the lessonsData
      setLessons(lessonsData[language].lessons);
    } else {
      console.log("No lessons found for this language.");
      setLessons([]); // No lessons found, clear the state
    }
  }, [language]);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 capitalize">{language} Lessons</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.length > 0 ? (
            lessons.map((lesson, index) => (
              <div
                key={`${language}-${index}`}
                className="bg-white text-blue-600 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => handleLessonClick(lesson)}
              >
                <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
                <p className="text-gray-600">{lesson.content.slice(0, 50)}...</p>
              </div>
            ))
          ) : (
            <p className="text-white text-xl">No lessons available for {language}.</p>
          )}
        </div>

        {selectedLesson && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">{selectedLesson.title}</h2>
            <p className="mt-2">{selectedLesson.content}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setSelectedLesson(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
