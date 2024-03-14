import React, { useState, useRef } from 'react';
import EditProfile from '../../components/EditProfile';
import banner from '../auth/assets/accountPage.png';
import './account-settings.css';
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetUserReviews } from "../../hooks/useGetUserReviews";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import Reviews from "../../components/Reviews";
import '../../components/review-box.css'
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { useGetTrucks } from '../../hooks/useGetTrucks';
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {handleDeleteFavorites, handleAddFavorites}  from "../../hooks/handleFavorites";

const AccountSettings = () => {
  const { name, profilePhoto, email, userID} = useGetUserInfo();
  const { userReviews } = useGetUserReviews();  
  const containerRef = useRef(null);
  const {userFavorites} = useGetFavorites(userID);
  const { trucks } = useGetTrucks();
  const { addFavorite } = handleAddFavorites();
  const navigate = useNavigate();
  const [clickedIcons, setClickedIcons] = useState(Array(trucks.length).fill(false));


  let filteredTrucks = []

  const listOfNames = userFavorites.map(obj => obj.associatedTruck);
  // console.log("NAMES :", listOfNames);
  for (let i = 0; i < trucks.length; i++) {
    // console.log("Title: ", trucks[i].title, " fav : ", listOfNames);
    if (listOfNames.includes(trucks[i].title)) {
      filteredTrucks.push(trucks[i]);
    }
  }
  // console.log("filtered!", filteredTrucks);

  const scrollTo = (scrollOffset) => {
      containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + scrollOffset,
          behavior: "smooth" 
      });
  };

  const handleClick = (navstr) => {
    // state object can contain any data you want to pass to the destination page.
    navigate(navstr);
};

useEffect(() => {
    if (trucks.length > 0 && userFavorites.length > 0) {
        // Initialize clickedIcons by comparing associatedTruck fields
        const initClickedIcons = trucks.map(truck =>
            // Check if the truck's associatedTruck matches any in userFavorites
            userFavorites.some(favorite => favorite.associatedTruck === trucks.title)
        );
        // Update the clickedIcons state with the new array
        setClickedIcons(initClickedIcons); // <-- This line ensures same order as trucks
    }
}, [trucks, userFavorites]);

const handleStarClick = (index, e, associatedTruck) => {
    e.stopPropagation(); // Prevent event propagation
    const updatedClickedIcons = [...clickedIcons];
    const isCurrentlyFavorited = updatedClickedIcons[index];
    if (!isCurrentlyFavorited) {
      console.log("WOrking");
        // improvement is to pass in the doc.id for it but we will work for a manual search!
        handleDeleteFavorites(userID, associatedTruck)
          .then(deleted => {
            if (deleted) {
              updatedClickedIcons[index] = !isCurrentlyFavorited;
              setClickedIcons(updatedClickedIcons);
            }
          })
          .catch(error => {
            console.error("Error deleting favorites:", error);
          });
      } else {
      // If the item is not currently favorited, add it to favorites
      console.log("Not workign");
      console.log(associatedTruck);
      addFavorite({
        associatedTruck: associatedTruck,
        userID: userID
      });
         // Update the state to reflect the change
    updatedClickedIcons[index] = !isCurrentlyFavorited;
    setClickedIcons(updatedClickedIcons);
    }
 
 
    console.log(userID);
    console.log(userFavorites.length);
  };



  return (
    <>
    <div className='Main'> 
    <div className='profile'>
      <div className='avatar' >
        <div className='avatar-wrapper'>
        <img src={profilePhoto} alt="User Profile" />
        </div>
      </div>
      <div className="body">
      <h3>Name: {name} </h3>
      <h3>Email: {email} </h3>
      </div> 
    </div>
     <div className="reviews-container" ref={containerRef}>
                {userReviews.map((review, index) => {
                    return (
                        <div key={index} className="reviewContainer">
                            <Reviews name={name} profilePhoto={profilePhoto} title={review.title} stars={review.stars} review={review.review} AccountSettings={review.id}></Reviews>
                        </div>
                    );
                })}
        </div>
        <h1 className="reviewsTitle">{filteredTrucks.length > 0 ? "My Favorites" : "Favorites: No favorites currently!"}</h1>
            <div className="menuList"> 
              {filteredTrucks.map((truck, index) => {
         const { description, imageurl, title, navStr } = truck;
         return (
           <div className="menuItem" key={index} onClick={() => handleClick(navStr)}>
             <div style={{ backgroundImage: `url(${imageurl})` }}></div>
             <h2 className="menuItemTitle">{title}</h2>
             <p>{description}</p>
             <CiStar
               size="3em"
               onClick={(e) => handleStarClick(index, e, truck.title)}
               style={{ cursor: 'pointer', fill: clickedIcons[index] ? 'red' : 'red' }}
             />
           </div>
         );
       })}
        </div>
              </div>
        <div className='spacing'></div>
    </>
  );
};
export default AccountSettings;