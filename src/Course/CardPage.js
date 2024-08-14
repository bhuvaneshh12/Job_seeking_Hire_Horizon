import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardPage.css';

// Importing images
import mentorAdviceImage from './img222.jpg'
import skillDevelopmentImage from './skill_development.jpg';
import jobApplicationToolsImage from './job_application_tools.jpg';
import internshipOpportunitiesImage from './internship_opportunities.jpg';
import articlesJobSearchImage from './articles_job_search.jpg';
import userCommunityImage from './img111.jpg';

const CardPage = () => {
    const navigate = useNavigate();

    const handleGoNowClick = (title) => {
        if (title === 'Skill Development Course') {
            navigate('/course-selection');
        }
    };

    const cards = [
        {
            title: 'Mentor Advice',
            description: 'Get advice from industry professionals.',
            image: mentorAdviceImage,
        },
        {
            title: 'Skill Development Course',
            description: 'Enhance your skills with our expert-led courses.',
            image: skillDevelopmentImage,
        },
        {
            title: 'Job Application Tools',
            description: 'Access tools to streamline your job application process.',
            image: jobApplicationToolsImage,
        },
        {
            title: 'Internship Opportunities',
            description: 'Find and apply for internships.',
            image: internshipOpportunitiesImage,
        },
        {
            title: 'Articles About Job Searching',
            description: 'Read articles to improve your job search strategy.',
            image: articlesJobSearchImage,
        },
        {
            title: 'User Community',
            description: 'Join our community of job seekers and professionals.',
            image: userCommunityImage,
        },
    ];

    return (
        <div className="lens-card-page">
            <h1 className="lens-card-page-title">Explore Our Resources</h1>
            <div className="lens-card-grid">
                {cards.map((card, index) => (
                    <div key={index} className="lens-card">
                        <img src={card.image} alt={card.title} className="lens-card-image" />
                        <div className="lens-card-content">
                            <h2 className="lens-card-title">{card.title}</h2>
                            <p className="lens-card-description">{card.description}</p>
                            <button className="lens-card-button" onClick={() => handleGoNowClick(card.title)}>Go Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPage;
