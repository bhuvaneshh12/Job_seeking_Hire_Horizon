import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import AddJob from './Admin/Addjob';
import Login from './Login/login';
import CreateAccount from './SignUp/Registration';
import Dashboard from './Landing/Dashboard';
import AboutUs from './AboutUs/AboutUs';
import CourseSelection from './Course/CourseSelection';
import Landing from './Landing/Landing';
import JobListing from './Job/JobListing';
import HomePage from './Home/HomePage';
import AdminLogin from './Admin/Adminlogin';
import Navbar from './Navbar/Nav1';
import Footer1 from './Footer/footer1';
import ApplicantsPage from './Admin/ApplicationPage';
import RemoveJob from './Admin/Removejob';
import CourseForm from './Admin/CourseForm';
import AddCompanyForm from './Admin/AddCompanyForm'; // Import the AddCompanyForm component
import './App.css';

function App() {
  const LocationWrapper = () => {
    const location = useLocation();
    const showNavbar = !['/login', '/register', '/admin-login', '/admin-dashboard', '/add-job', '/'].includes(location.pathname);
    const showFooter = !['/login', '/register', '/admin-login', '/admin-dashboard', '/add-job', '/'].includes(location.pathname);

    return (
      <div className="App">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<CourseSelection />} />
          <Route path="/job-listing" element={<JobListing />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/applicants" element={<ApplicantsPage />} />
          <Route path="/remove-job" element={<RemoveJob />} />
          <Route path="/service-management" element={<CourseForm />} /> {/* Route for CourseForm */}
          <Route path="/company-management" element={<AddCompanyForm />} /> {/* Route for AddCompanyForm */}
        </Routes>
        {showFooter && <Footer1 />}
      </div>
    );
  };

  return (
    <Router>
      <LocationWrapper />
    </Router>
  );
}

export default App;
