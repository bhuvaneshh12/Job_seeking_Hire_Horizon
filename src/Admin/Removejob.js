import React, { useState, useEffect } from 'react';
import './Removejob.css';

const RemoveJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:9001/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          console.error('Failed to fetch jobs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await fetch(`http://localhost:9001/jobs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Job removed successfully');
        setJobs(jobs.filter(job => job.id !== id)); // Remove from list
      } else {
        console.error('Failed to remove job:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing job:', error);
    }
  };

  return (
    <div className="remove-job-page">
      <div className="remove-job-container">
        <h2>Remove Job</h2>
        <div className="remove-job-list">
          {jobs.length > 0 ? (
            jobs.map(job => (
              <div key={job.id} className="remove-job-item">
                <div className="remove-job-details">
                  <p><strong>Title:</strong> {job.title}</p>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Skills:</strong> {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}</p>
                  <p><strong>Date:</strong> {job.date}</p>
                  <p><strong>Description:</strong> {job.description}</p>
                  <p><strong>Company Description:</strong> {job.companyDescription}</p>
                </div>
                <button onClick={() => handleRemove(job.id)} className="remove-button">Remove</button>
              </div>
            ))
          ) : (
            <p>No jobs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveJob;
