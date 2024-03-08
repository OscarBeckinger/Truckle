import React from 'react';
import EditProfile from '../../components/EditProfile';
import './account-settings.css';
// This is the Account Settings page, it displays eveyrthing related to you acc information:
// name, email, all your reviews
// AccountSettings has child views such as EditProfile
const AccountSettings = () => {
  return (
    <div className="background">
    <div className="container">
      <h1 className="heading">Your Profile</h1>
      <div className="content">
        <EditProfile />
      </div>
    </div>
    </div>
  );
};

export default AccountSettings;