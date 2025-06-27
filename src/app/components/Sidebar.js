import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profile.jpg'; // Path to your image

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">FileMint</div>
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <span className="profile-initials">OB</span> {/* Optional initials */}
      </div>
      <nav>
        <Link to="/account" className="nav-link">Account</Link>
        <Link to="/subscription" className="nav-link">Subscription</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
