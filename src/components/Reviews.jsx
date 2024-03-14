import React, { useState, useEffect } from "react";
import "./review-box.css";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";

const Reviews = ({ name, profilePhoto, title, stars, review, AccountSettings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [truncatedReview, setTruncatedReview] = useState('');

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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const truncateReviewText = (text) => {
    if(text.length > 50) {
      return text.slice(0, 50) + '...';
    }
    else {
      return text;
    }
  };

  const handleDeleteReview = async (index, e) => {
    e.stopPropagation(); // Prevent event propagation
    // Display a confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete this review?");

    // If the user confirms deletion, proceed with deletion
    if (confirmed) {
      deleteDoc(doc(db, "reviews", index));
    } else {
      // Do nothing if the user cancels
      // alert("Deletion cancelled.");
    }
  };

  useEffect(() => {
    setTruncatedReview(truncateReviewText(review));
  }, [review]);

  return (
    <div className="review-container" onClick={togglePopup}>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profilePhoto} alt="profile" height="50" width="50" />
        </div>
        <div className="name">{name}</div>
        {AccountSettings ? (
  <button onClick={(e) => handleDeleteReview(AccountSettings, e)} className="deleteButton">
    &#x1F5D1; {/* Unicode for trash can icon */}
  </button>
) : null}
      </div>
      <h3>{title}</h3>
      <div className="stars">{renderStars()}</div>
      <p>{truncatedReview}</p>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <div className="profile-info">
              <div className="profile-picture">
                <img src={profilePhoto} alt="profile" height="50" width="50" />
              </div>
              <div className="name">{name}</div>
            </div>
            <div className="stars">{renderStars()}</div>
            <p className="review-text">{review}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;