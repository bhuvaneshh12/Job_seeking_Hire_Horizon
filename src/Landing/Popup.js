import React from 'react';
import './Popup.css';

function Popup({ company, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>×</span>
        <h2>{company.name}</h2>
        <img src={company.logo} alt={company.name} />
        <p>{company.description}</p>
        <h3>Recruitment Skills:</h3>
        <ul>
          {/* Example skills */}
          <li>Java</li>
          <li>C++</li>
          <li>web development</li>
        </ul>
        <button className="popup-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
