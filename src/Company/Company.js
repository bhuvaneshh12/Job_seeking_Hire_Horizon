// src/Company.js
import React, { useState } from 'react';
import './Company.css';


const Company = ({ companies }) => {
  const [appliedCompanies, setAppliedCompanies] = useState({});

  const handleApplyClick = (companyName) => {
    setAppliedCompanies((prev) => ({
      ...prev,
      [companyName]: true,
    }));
  };

  return (
    <div>
    
      <div className="company-container">
        {companies.map((company) => (
          <div className="company-card" key={company.name}>
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
            <div className="company-details">
              <h3>{company.name}</h3>
              <p>{company.details}</p>
              <p>{company.reviews} reviews</p>
              <button
                className="apply-button"
                onClick={() => handleApplyClick(company.name)}
                disabled={appliedCompanies[company.name]}
              >
                {appliedCompanies[company.name] ? 'Applied Now' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
