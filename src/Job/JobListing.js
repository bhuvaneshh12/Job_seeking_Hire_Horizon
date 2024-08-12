import React, { useState, useEffect } from 'react';
import './JobListing.css';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faDollarSign, faTags, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import required icons

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:9001/jobs'); // Replace with your backend URL
        setJobs(response.data);
        setSelectedJob(response.data[0] || null);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (Array.isArray(job.skills) && job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())))) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, locationFilter, jobs]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleQuickApplyClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="job-listing-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by job, company, skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="job-listing-content">
        <div className="job-results">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="job-card" onClick={() => handleJobClick(job)}>
                <h3>{job.title}</h3>
                <p><strong>{job.company}</strong></p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faBriefcase} /> {job.experience || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> {job.salary || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faTags} /> {(Array.isArray(job.skills) ? job.skills.join(', ') : 'N/A') || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faCalendarAlt} /> {job.date || 'N/A'}</p>
                <button onClick={(e) => { e.stopPropagation(); handleQuickApplyClick(); }}>Quick Apply</button>
              </div>
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </div>
        <div className="job-details">
          {selectedJob && (
            <>
              <h2>{selectedJob.title}</h2>
              <p><strong>Company:</strong> {selectedJob.company}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {selectedJob.location || 'N/A'}</p>
              <p><FontAwesomeIcon icon={faBriefcase} /> {selectedJob.experience || 'N/A'}</p>
              <p><FontAwesomeIcon icon={faDollarSign} /> {selectedJob.salary || 'N/A'}</p>
              <p><FontAwesomeIcon icon={faTags} /> {(Array.isArray(selectedJob.skills) ? selectedJob.skills.join(', ') : 'N/A') || 'N/A'}</p>
              <div className="job-description">
                <h3>About the Job</h3>
                <p>{selectedJob.description || 'No description available'}</p>
                <h3>About the Company</h3>
                <p>{selectedJob.companyDescription || 'No company description available'}</p>
              </div>
            </>
          )}
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default JobListing;
