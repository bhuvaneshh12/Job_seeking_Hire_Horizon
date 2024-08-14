import React, { useState, useEffect } from 'react';
import './Addjob.css';

const JobManager = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState(''); // Skills as a single string
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

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

  const handleAddJob = async (e) => {
    e.preventDefault();

    const newJob = {
      title,
      company,
      location,
      experience,
      salary,
      skills, // Use skills as a single string
      date,
      description,
      companyDescription,
    };

    try {
      const response = await fetch('http://localhost:9001/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });

      if (response.ok) {
        const result = await response.json();
        setJobs([...jobs, result]);

        // Clear form fields
        setTitle('');
        setCompany('');
        setLocation('');
        setExperience('');
        setSalary('');
        setSkills('');
        setDate('');
        setDescription('');
        setCompanyDescription('');
        setShowForm(false);
      } else {
        console.error('Failed to add job:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const handleRemoveJob = async (id) => {
    try {
      const response = await fetch(`http://localhost:9001/jobs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setJobs(jobs.filter((job) => job.id !== id));
      } else {
        console.error('Failed to remove job:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing job:', error);
    }
  };

  const handleUpdateJob = async (id, updatedJob) => {
    try {
      const response = await fetch(`http://localhost:9001/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });

      if (response.ok) {
        const result = await response.json();
        setJobs(jobs.map((job) => (job.id === id ? result : job)));
      } else {
        console.error('Failed to update job:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="job-manager-page">
      <div className="job-manager-container">
        <div className="job-list-section">
          <h2>Job List</h2>
          <div className="job-list">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="job-item">
                  <div className="job-details">
                    <p><strong>Title:</strong> {job.title}</p>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Skills:</strong> {job.skills}</p> {/* Display skills as a single string */}
                    <p><strong>Date:</strong> {job.date}</p>
                    <p><strong>Description:</strong> {job.description}</p>
                    <p><strong>Company Description:</strong> {job.companyDescription}</p>
                  </div>
                  <div className="job-actions">
                    <button
                      onClick={() => handleUpdateJob(job.id, {
                        ...job,
                        title: prompt('Update job title:', job.title) || job.title,
                        company: prompt('Update company:', job.company) || job.company,
                        location: prompt('Update location:', job.location) || job.location,
                        experience: prompt('Update experience:', job.experience) || job.experience,
                        salary: prompt('Update salary:', job.salary) || job.salary,
                        skills: prompt('Update skills (comma separated):', job.skills) || job.skills,
                        date: prompt('Update date:', job.date) || job.date,
                        description: prompt('Update description:', job.description) || job.description,
                        companyDescription: prompt('Update company description:', job.companyDescription) || job.companyDescription,
                      })}
                      className="update-button"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleRemoveJob(job.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        </div>

        {/* Form Toggle Button */}
        <button onClick={toggleFormVisibility} className="toggle-form-button">
          {showForm ? '-' : '+'}
        </button>

        {showForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Add Job</h2>
              <form onSubmit={handleAddJob}>
                <label>
                  Job Title
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Company
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Location
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Experience
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Salary
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Skills (comma separated)
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Date
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Job Description
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Company Description
                  <textarea
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    required
                  />
                </label>
                <div className="form-actions">
                  <button type="submit" className="add-button">Add Job</button>
                  <button type="button" className="cancel-button" onClick={closeForm}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobManager;
