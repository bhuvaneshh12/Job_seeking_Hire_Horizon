// src/Course/PaymentPopup.js
import React from 'react';
import './PaymentPopup.css';

const PaymentPopup = ({ onClose }) => {
  return (
    <>
      <div className="payment-popup-overlay" onClick={onClose}></div>
      <div className="payment-popup">
        <h2>Payment Options</h2>
        <p>Select your payment method:</p>
        <ul>
          <li><button>UPI</button></li>
          <li><button>Card</button></li>
          <li><button>Online Banking</button></li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default PaymentPopup;
