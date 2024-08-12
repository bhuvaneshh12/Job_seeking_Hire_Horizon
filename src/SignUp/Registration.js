// src/components/CreateAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGoogle } from 'react-icons/fa'; // Import FontAwesome icons
import './Registration.css';
import axios from 'axios'

 const CreateAccount = () => {
   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form validation and submission logic here
//     // If registration is successful, navigate to the dashboard
//     navigate('/dashboard');
//   };


const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  repassword: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await axios.post('http://localhost:9001/add', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
  } catch (error) {
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
  }
};

const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  
  return (
    <div className="create-account-container">
      <div className="form-container">
        <div className="form-header">
          <h1></h1>
          <h2>Create Account</h2>
          <div className="account-type-toggle">
            <button className="active">Candidate</button>
            {/* <button>Employer</button> */}
          </div>
          <div className="social-signup">
            <button className="linkedin">
              <FaLinkedin className="social-icon" />
            </button>
            <button className="google">
              <FaGoogle className="social-icon" />
            </button>
          </div>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </div> */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter password again"
              required
            />
          </div>
          <button type="submit" className="create-account-btn">Create Account</button>
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          {/* <p>“Thanks to this job portal website, I quickly found my dream job! Easy to navigate, countless opportunities, and excellent results. Highly recommended!”</p>
          <p>- Emily Kuper, Satisfied Job Seeker</p> */}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
