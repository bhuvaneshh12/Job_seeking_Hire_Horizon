import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userdetails.css';

const Details = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the payment page after registration
    navigate('/payment');
  };

  return (
    <div className="registration-page">
      <h1>Register for the Course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={userDetails.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={userDetails.address} onChange={handleChange} required />
        </label>
        <button type="submit">Continue to Payment</button>
      </form>
    </div>
  );
};

export default Details;
