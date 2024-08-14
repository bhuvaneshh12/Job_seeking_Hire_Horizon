import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddCompanyForm.css';

const AddCompanyForm = () => {
    const [companyData, setCompanyData] = useState({
        name: '',
        description: '',
        rating: '',
        imageUrl: ''
    });

    const [companies, setCompanies] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        // Fetch companies from the database on component load
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:9001/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error("There was an error fetching the companies!", error);
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({
            ...companyData,
            [name]: value
        });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9001/companies/add', companyData);
            setCompanies([...companies, response.data]); // Add the new company to the state
            setCompanyData({
                name: '',
                description: '',
                rating: '',
                imageUrl: ''
            });
            setIsAddModalOpen(false); // Close the modal
        } catch (error) {
            console.error("There was an error adding the company!", error);
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:9001/companies/${editData.id}`, companyData);
            setCompanies(companies.map(company => 
                company.id === editData.id ? response.data : company
            )); // Update the company in the state
            setIsUpdateModalOpen(false); // Close the modal
        } catch (error) {
            console.error("There was an error updating the company!", error);
        }
    };

    const openAddModal = () => {
        // Reset companyData when opening the "Add Company" modal
        setCompanyData({
            name: '',
            description: '',
            rating: '',
            imageUrl: ''
        });
        setIsAddModalOpen(true);
    };

    const openUpdateModal = (company) => {
        setEditData(company);
        setCompanyData(company);
        setIsUpdateModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9001/companies/${id}`);
            setCompanies(companies.filter(company => company.id !== id)); // Remove the company from the state
            console.log("Company deleted");
        } catch (error) {
            console.error("There was an error deleting the company!", error);
        }
    };

    return (
        <div className="add-company-form-container">
            <h2 className="form-title">Manage Companies</h2>
            <br/><br/><br/>
            <div className="company-cards-container">
                {companies.map(company => (
                    <div className="company-card" key={company.id}>
                        <img src={company.imageUrl} alt={company.name} className="company-image" />
                        <h3>{company.name}</h3>
                        <p>{company.description}</p>
                        <span className="company-rating">Rating: {company.rating}</span>
                        <button onClick={() => openUpdateModal(company)} className="edit-button">Edit</button>
                        <button onClick={() => handleDelete(company.id)} className="delete-button">Delete</button>
                    </div>
                ))}

                {/* "+" Card */}
                <div className="company-card add-card" onClick={openAddModal}>
                    <div className="add-icon">+</div>
                    <p>Add Company</p>
                </div>
            </div>

            {/* Add Company Modal */}
            {isAddModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsAddModalOpen(false)}>&times;</span>
                        <form onSubmit={handleAddSubmit} className="add-company-form">
                            <div className="form-group">
                                <label htmlFor="name">Company Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={companyData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={companyData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating:</label>
                                <input
                                    type="text"
                                    id="rating"
                                    name="rating"
                                    value={companyData.rating}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">Image URL:</label>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={companyData.imageUrl}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-button">Add Company</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Update Company Modal */}
            {isUpdateModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsUpdateModalOpen(false)}>&times;</span>
                        <form onSubmit={handleUpdateSubmit} className="add-company-form">
                            <div className="form-group">
                                <label htmlFor="name">Company Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={companyData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={companyData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating:</label>
                                <input
                                    type="text"
                                    id="rating"
                                    name="rating"
                                    value={companyData.rating}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">Image URL:</label>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={companyData.imageUrl}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-button">Update Company</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCompanyForm;
