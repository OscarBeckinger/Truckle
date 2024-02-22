import React from 'react';
import EditProfile from './components/EditProfile';

// This is the Account Settings page, it displays eveyrthing related to you acc information:
// name, email, all your reviews
// AccountSettings has child views such as EditProfile
const AccountSettings = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Profile</h1>
      <div style={styles.content}>
        <EditProfile />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default AccountSettings;
