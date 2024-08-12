import React, { useState } from 'react';
import './Addjob.css';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newJob = {
      title,
      company,
      location,
      experience,
      salary,
      skills: skills.split(',').map(skill => skill.trim()).join(','),
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
        console.log('Job added successfully:', result);
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
      } else {
        console.error('Failed to add job:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="sun-page">
      <div className="sun-container">
        <div className="sun-form-left">
          <h2>Add Job</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Add Job</button>
          </form>
        </div>
        <div className="sun-form-right">
          <img src="path/to/your/image.jpg" alt="Job Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AddJob;
