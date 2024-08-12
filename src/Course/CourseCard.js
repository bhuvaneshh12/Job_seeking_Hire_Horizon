import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card" onClick={() => onClick(course)}>
      <img src={course.imageUrl} alt={course.title} className="course-image" />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Fee:</strong> ₹{course.feeInINR}</p> {/* Fee in INR */}
      </div>
    </div>
  );
};

export default CourseCard;
