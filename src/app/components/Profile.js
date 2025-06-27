import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSaveChanges = () => {
    // Call the backend API to save the profile changes
    axios.post('/api/profile', { firstName, lastName })
      .then(response => {
        alert('Profile updated successfully');
      })
      .catch(error => {
        alert('Error updating profile');
      });
  };

  return (
    <div className="profile-container">
      <h2>Profile Settings</h2>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default Profile;
