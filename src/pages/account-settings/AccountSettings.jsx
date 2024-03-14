import React from 'react';
import EditProfile from '../../components/EditProfile';
import banner from '../auth/assets/accountPage.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './account-settings.css';

const AccountSettings = () => {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="banner-account">
          <img src={banner} className="banner" />
        </div>
        <div className="edit-profile-container">
          <div className="edit-profile-content">
            <EditProfile />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountSettings;
