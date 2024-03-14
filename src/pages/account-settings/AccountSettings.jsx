import React, { useState, useRef } from 'react';
import EditProfile from '../../components/EditProfile';
import banner from '../auth/assets/accountPage.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './account-settings.css';
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetUserReviews } from "../../hooks/useGetUserReviews";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import Reviews from "../../components/Reviews";
import '../../components/review-box.css'




const AccountSettings = () => {
  const { name, profilePhoto, email } = useGetUserInfo();
  const { userReviews } = useGetUserReviews();  
  const containerRef = useRef(null);

  const scrollTo = (scrollOffset) => {
      containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + scrollOffset,
          behavior: "smooth" 
      });
  };
  return (
    <>
    <Navbar></Navbar>
    <div className='profile'>
      <div className='avatar' >
        <div className='avatar-wrapper'>
        <img src={profilePhoto} alt="User Profile" />
        </div>
      </div>
      <div className="body">
      <h3>Name: {name} </h3>
      <h3>Email: {email} </h3>
      <h3> Your Favorites: </h3>
      </div> 
    </div>
    <h1 className="reviewsTitle" > {userReviews.length > 0 ? `Total Reviews: ${userReviews.length}` : "No Reviews"}</h1>
     <div className="reviews-container" ref={containerRef}>
                {userReviews.map((review, index) => {
                    return (
                        <div key={index} className="reviewContainer">
                            <Reviews name={name} profilePhoto={profilePhoto} title={review.title} stars={review.stars} review={review.review} AccountSettings={review.id}></Reviews>
                        </div>
                    );
                })}
            </div>
    <Footer></Footer>
    </>
  );
};
export default AccountSettings;

