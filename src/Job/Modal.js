import React, { useState } from 'react';
import './Modal.css'; // Ensure you have this CSS file
import axios from 'axios'; // Add axios for HTTP requests

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    role: '',
    gender: '',
    age: '',
    education: '',
    experience: '',
    location: '',
    resumeHeadline: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use FormData to send the data to the backend
      await axios.post('http://localhost:9001/apply', formData, {
        headers: {
          'Content-Type': 'application/json' // Content-Type set to application/json
        }
      });
      console.log('Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => closeModal(), 1000); // Close modal after delay
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="tree-overlay">
      <div className="tree-content">
        <button className="tree-button" onClick={closeModal}>X</button>
        <h2>Quick Apply</h2>
        <form onSubmit={handleSubmit} className="tree-form">
          <div className="form-grid">
            <div className="form-group">
              <label>
                Fullname:
                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Role:
                <input type="text" name="role" value={formData.role} onChange={handleChange} required />
              </label>
              <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Education:
                <input type="text" name="education" value={formData.education} onChange={handleChange} required />
              </label>
              <label>
                Experience:
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </label>
              <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              </label>
              <label>
                Resume Headline:
                <input type="text" name="resumeHeadline" value={formData.resumeHeadline} onChange={handleChange} required />
              </label>
            </div>
          </div>
          <button type="submit" className="tree-submit">
            {submitted ? 'Applied' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
