import React from 'react';
import './footer1.css';
import logo from './logo.jpg'; // Make sure the path is correct

const Footer1 = () => {
    return (
        <>
            <div className="Food">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <img src={logo} alt="EmpowerU Logo" className="footer-logo" />
                            <h3><span>Empower</span>U</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Create a project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">All Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Us</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +91 173314</p>
                            <p><i className="fa-solid fa-envelope"></i> empoweru23@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Kalyani, Nadia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer1;
