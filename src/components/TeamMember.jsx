import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, photo, role }) => {
  return (
    <div className="team-member-card">
      <img src={photo} alt={`${name}'s photo`} className="team-member-photo" />
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
    </div>
  );
};

export default TeamMember;
