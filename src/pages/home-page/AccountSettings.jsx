import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for programmatic navigation
import { useState } from 'react';
import EditProfile from './components/EditProfile';
const AccountSettings = () => {
      const [isEditing, setIsEditing] = useState(false);
      const handleSaveProfile = () => {
            // Logic to save profile changes goes here
            setIsEditing(false); // Exit edit mode after saving
            // Optionally, you can navigate the user to a different page after saving
            // history.push('/some-other-route');
          };

    return (
      <div>
      <h1>Your Profile</h1>
      <EditProfile /> 
    </div>
  );
};

export default AccountSettings;
