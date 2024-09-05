import React from 'react';
import './About.css'; // Import the CSS file for About component
import TeamMember from './TeamMember'; // Import the TeamMember component

const About = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: 'Alice Johnson',
      photo: 'https://via.placeholder.com/150',
      role: 'Founder & CEO',
    },
    {
      name: 'Bob Smith',
      photo: 'https://via.placeholder.com/150',
      role: 'Chief Technical Officer',
    },
    {
      name: 'Carol Davis',
      photo: 'https://via.placeholder.com/150',
      role: 'Lead Designer',
    },
  ];

  return (
    <div className="about-container">
      <div className="about-image">
        <img 
          src="./bg3.jpeg" 
          alt="About us" 
          className="responsive-image"
        />
      </div>
      <div className="about-content">
        <h2>About Our Website</h2>
        <p>
          Welcome to our website! We are dedicated to providing the best content for our users. 
          Our website is focused on delivering high-quality resources and information that cater 
          to a diverse audience. Whether you are looking for insightful articles, engaging tutorials, 
          or the latest news, we have something for everyone.
        </p>
        <div className="card-container">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals by providing them with access to a wealth of 
              information and resources that enhance their knowledge and skills.
            </p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              We envision a world where information is freely accessible to all, and where everyone 
              has the opportunity to learn and grow through the content we provide.
            </p>
          </div>
          <div className="card">
            <h3>Our Values</h3>
            <p>
              We value integrity, inclusivity, and innovation. We strive to create a platform that 
              is not only informative but also inspiring and inclusive of diverse perspectives.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              photo={member.photo} 
              role={member.role} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
