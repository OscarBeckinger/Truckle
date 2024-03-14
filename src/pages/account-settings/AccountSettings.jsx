import React from 'react';
import EditProfile from '../../components/EditProfile';
import './account-settings.css';
import banner from '../auth/assets/accountPage.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './account-settings.css';
// This is the Account Settings page, it displays eveyrthing related to you acc information:
// name, email, all your reviews
// AccountSettings has child views such as EditProfile
const AccountSettings = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="background">
      <div className="banner-account">
        <img src = {banner} className ="banner"/>
        <div style={styles.container}>
          
            <div style={styles.content}>
              <EditProfile />
            </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '-100px auto 0 auto',
    padding: '25px',
    fontFamily: 'Merriweather, sans-serif', 
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '-20px'
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
   
  },
};

export default AccountSettings;