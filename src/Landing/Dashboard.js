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
    const [isSubmitted, setIsSubmitted] = useState(false);

    // New states for filters
    const [salaryFilter, setSalaryFilter] = useState([]);
    const [locationFilter, setLocationFilter] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9001/companies')
            .then(response => {
                setCompanies(response.data);
                setFilteredCompanies(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the company data!", error);
            });
    }, []);

    const handleSearch = () => {
        setFilteredCompanies(
            companies.filter((company) =>
                company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (salaryFilter.length === 0 || salaryFilter.includes(company.salaryRange)) &&
                (locationFilter.length === 0 || locationFilter.includes(company.location))
            )
        );
    };

    const handleApply = (company) => {
        setCurrentCompany(company);
        setIsApplyModalOpen(true);
        setIsSubmitted(false);
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
            setIsSubmitted(true);
            setIsApplyModalOpen(false);
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

    const handleSalaryChange = (e) => {
        const value = e.target.value;
        setSalaryFilter(
            e.target.checked
                ? [...salaryFilter, value]
                : salaryFilter.filter((salary) => salary !== value)
        );
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocationFilter(
            e.target.checked
                ? [...locationFilter, value]
                : locationFilter.filter((location) => location !== value)
        );
    };

    return (
        <div className="bhu-page">
            <h1 className="bhu-title">Company Listings</h1>
            <div className="bhu-container">
                {/* Sidebar */}
                <div className="bhu-sidebar">
                    <h2>Filters</h2>
                    <div className="bhu-filter-group">
                        <h3>Salary Range</h3>
                        <label>
                            <input
                                type="checkbox"
                                value="0-50k"
                                onChange={handleSalaryChange}
                            />
                            ₹30,000- ₹50,000 INR
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="50k-100k"
                                onChange={handleSalaryChange}
                            />
                            ₹50,000- ₹100,000 INR
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="100k-150k"
                                onChange={handleSalaryChange}
                            />
                            ₹100,000- ₹150,000 INR
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="150k+"
                                onChange={handleSalaryChange}
                            />
                            ₹150,000+ INR
                        </label>
                    </div>
                    <div className="bhu-filter-group">
                        <h3>Location</h3>
                        <label>
                            <input
                                type="checkbox"
                                value="Chennai"
                                onChange={handleLocationChange}
                            />
                            Chennai
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Pune"
                                onChange={handleLocationChange}
                            />
                            Pune
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Bangalore"
                                onChange={handleLocationChange}
                            />
                            Bangalore
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Mumbai"
                                onChange={handleLocationChange}
                            />
                            Mumbai
                        </label>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="bhu-filter-button"
                    >
                        Apply Filters
                    </button>
                </div>

                {/* Main Content */}
                <div className="bhu-list">
                    <div className="bhu-search-container">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bhu-search-bar"
                        />
                        <button
                            onClick={handleSearch}
                            className="bhu-search-button"
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    <br/>
                    <div className="bhu-cards">
                        {filteredCompanies.map((company) => (
                            <div key={company.id} className="bhu-card">
                                <img
                                    src={company.imageUrl}
                                    alt={company.name}
                                    className="bhu-image"
                                />
                                <div className="bhu-details">
                                    <h2>{company.name}</h2>
                                    <p>{company.description}</p>
                                    <span className="bhu-rating">
                                        Rating: {company.rating}
                                    </span>
                                    <span className="bhu-salary">
                                        Salary: {company.salaryRange}
                                    </span>
                                    <button onClick={() => handleApply(company)} className="bhu-button">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Apply Form Modal */}
            {isApplyModalOpen && (
                <div className="bhu-modal">
                    <div className="bhu-modal-content">
                        <span className="bhu-close" onClick={closeModal}>&times;</span>
                        <h2>Apply for {currentCompany?.name}</h2>
                        <form onSubmit={handleSubmit} className="bhu-apply-form">
                            {/* Form fields remain unchanged */}
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
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
                            <div className="bhu-form-group">
                                <label htmlFor="resumeFile">Upload Resume:</label>
                                <input
                                    type="file"
                                    id="resumeFile"
                                    name="resumeFile"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="bhu-submit-button">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Company;
