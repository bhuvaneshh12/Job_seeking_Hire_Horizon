// CourseSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseSelection.css';

const CourseSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:9001/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <img src={course.imageUrl} alt={course.courseName} />
          <h3>{course.courseName}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
