import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursePopup.css';

const CoursePopup = ({ course, onClose }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="course-popup-overlay" onClick={onClose}></div>
      <div className="course-popup">
        <h2>{course.title}</h2>
        <p><strong>Description:</strong> {course.details}</p>
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Fee:</strong> ₹{course.feeInINR.toLocaleString()}</p>
        <button onClick={onClose}>Close</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
};

export default CoursePopup;
