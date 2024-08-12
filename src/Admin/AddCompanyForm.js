import React, { useState } from 'react';
import axios from 'axios';
import './AddCompanyForm.css';

const AddCompanyForm = () => {
    const [companyData, setCompanyData] = useState({
        name: '',
        description: '',
        rating: '',
        imageUrl: ''
    });

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

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
            console.log(response.data);
            // Optionally clear the form after submission
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
            console.log(response.data);
            setIsUpdateModalOpen(false); // Close the modal
        } catch (error) {
            console.error("There was an error updating the company!", error);
        }
    };

    const openAddModal = () => {
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
                {/* Example company cards */}
                <div className="company-card">
                    <img src="https://via.placeholder.com/300x150?text=Tech+Co." alt="Tech Co." className="company-image" />
                    <h3>Tech Co.</h3>
                    <p>A leading tech company.</p>
                    <span className="company-rating">Rating: 4.5</span>
                    <button onClick={() => openUpdateModal({
                        id: 1,
                        name: 'Tech Co.',
                        description: 'A leading tech company.',
                        rating: '4.5',
                        imageUrl: 'https://via.placeholder.com/300x150?text=Tech+Co.'
                    })} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(1)} className="delete-button">Delete</button>
                </div>

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
