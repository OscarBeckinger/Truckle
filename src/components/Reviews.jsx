


import React from "react";
import "./review-box.css";

const Reviews = ({ name, profilePhoto, title, stars, review }) => {
  const renderStars = () => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<span key={i} className="star">&#9733;</span>); 
      } else {
        starIcons.push(<span key={i} className="star">&#9734;</span>); 
      }
    }
    return starIcons;
  };

  return (
    <div className="review-container">
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profilePhoto} alt="profile" height="50" width="50" />
        </div>
        <div className="name">{name}</div>
      </div>
      <h3>{title}</h3>
      <div className="stars">{renderStars()}</div>
      <p>{review}</p>
    </div>
  );
};

export default Reviews;