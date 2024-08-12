import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import SearchIcon from '@mui/icons-material/Search';

const Company = () => {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [currentCompany, setCurrentCompany] = useState(null);
    const [applicationForm, setApplicationForm] = useState({
        fullname: '',
        email: '',
        role: '',
        gender: '',
        age: '',
        education: '',
        experience: '',
        location: '',
        resumeHeadline: '',
        resumeFile: null
    });

    useEffect(() => {
        // Fetch the company data from the backend when the component mounts
        axios.get('http://localhost:9001/companies')
            .then(response => {
                setCompanies(response.data);
                setFilteredCompanies(response.data); // Initialize filteredCompanies with all companies
            })
            .catch(error => {
                console.error("There was an error fetching the company data!", error);
            });
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredCompanies(
            companies.filter((company) =>
                company.name.toLowerCase().includes(term)
            )
        );
    };

    const handleApply = (company) => {
        setCurrentCompany(company);
        setIsApplyModalOpen(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setApplicationForm({
            ...applicationForm,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setApplicationForm({
            ...applicationForm,
            resumeFile: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in applicationForm) {
            formData.append(key, applicationForm[key]);
        }
        formData.append('companyId', currentCompany.id);

        try {
            await axios.post('http://localhost:9001/apply', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Application submitted successfully!');
            setIsApplyModalOpen(false);
            setApplicationForm({
                fullname: '',
                email: '',
                role: '',
                gender: '',
                age: '',
                education: '',
                experience: '',
                location: '',
                resumeHeadline: '',
                resumeFile: null
            });
        } catch (error) {
            console.error("There was an error submitting the application!", error);
        }
    };

    const closeModal = () => {
        setIsApplyModalOpen(false);
        setApplicationForm({
            fullname: '',
            email: '',
            role: '',
            gender: '',
            age: '',
            education: '',
            experience: '',
            location: '',
            resumeHeadline: '',
            resumeFile: null
        });
    };

    return (
        <div className="company-page">
            <h1 className="page-title">Company Listings</h1>
            <div className="company-list">
                <div className="search-container">
                    <SearchIcon className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-bar"
                    />
                </div>
                <div className="company-cards">
                    {filteredCompanies.map((company) => (
                        <div key={company.id} className="company-card">
                            <img
                                src={company.imageUrl}
                                alt={company.name}
                                className="company-image"
                            />
                            <div className="company-details">
                                <h2>{company.name}</h2>
                                <p>{company.description}</p>
                                <span className="company-rating">
                                    Rating: {company.rating}
                                </span>
                                <button onClick={() => handleApply(company)} className="apply-button">
                                    Apply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Apply Form Modal */}
            {isApplyModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Apply for {currentCompany?.name}</h2>
                        <form onSubmit={handleSubmit} className="apply-form">
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name:</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={applicationForm.fullname}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={applicationForm.email}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role:</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={applicationForm.role}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={applicationForm.gender}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age:</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={applicationForm.age}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Education:</label>
                                <input
                                    type="text"
                                    id="education"
                                    name="education"
                                    value={applicationForm.education}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="experience">Experience:</label>
                                <input
                                    type="text"
                                    id="experience"
                                    name="experience"
                                    value={applicationForm.experience}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={applicationForm.location}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="resumeHeadline">Resume Headline:</label>
                                <input
                                    type="text"
                                    id="resumeHeadline"
                                    name="resumeHeadline"
                                    value={applicationForm.resumeHeadline}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="resumeFile">Resume File:</label>
                                <input
                                    type="file"
                                    id="resumeFile"
                                    name="resumeFile"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-button">Submit Application</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Company;
