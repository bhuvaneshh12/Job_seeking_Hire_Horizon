import React, { useState, useEffect } from 'react';
import './ApplicationPage.css'; // Create this CSS file for styling

const ApplicantsPage = () => {
  // Sample default data
  const defaultApplicants = [
    {
      fullname: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Software Engineer',
      gender: 'Male',
      age: 28,
      education: 'Bachelor\'s Degree in Computer Science',
      experience: '5 years',
      location: 'New York, NY',
      resumeHeadline: 'Experienced Software Engineer with expertise in React and Node.js'
    },
    {
      fullname: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Data Scientist',
      gender: 'Female',
      age: 32,
      education: 'Master\'s Degree in Data Science',
      experience: '7 years',
      location: 'San Francisco, CA',
      resumeHeadline: 'Skilled Data Scientist with a strong background in machine learning'
    },
    {
      fullname: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'UI/UX Designer',
      gender: 'Female',
      age: 26,
      education: 'Bachelor\'s Degree in Design',
      experience: '3 years',
      location: 'Los Angeles, CA',
      resumeHeadline: 'Creative UI/UX Designer with a passion for user-centric design'
    }
  ];

  const [applicants, setApplicants] = useState(defaultApplicants);

  useEffect(() => {
    // You can uncomment this block and replace the default data with an API call when available
    // const fetchApplicants = async () => {
    //   const response = await fetch('/api/applicants');
    //   const data = await response.json();
    //   setApplicants(data);
    // };

    // fetchApplicants();
  }, []);

  return (
    <div className="applicants-page">
      <h1>Applicants Details</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Education</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Resume Headline</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td>{applicant.fullname}</td>
              <td>{applicant.email}</td>
              <td>{applicant.role}</td>
              <td>{applicant.gender}</td>
              <td>{applicant.age}</td>
              <td>{applicant.education}</td>
              <td>{applicant.experience}</td>
              <td>{applicant.location}</td>
              <td>{applicant.resumeHeadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsPage;
