import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useGetUserReviews } from "../hooks/useGetUserReviews";
//import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";

export default function EditProfile() {
  const { name, profilePhoto, email } = useGetUserInfo();
  console.log("hey")
  const { userReviews } = useGetUserReviews();

  const handleDeleteReview = async (index) => {
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


  return (
    <>
      <div style={styles.profileContainer}>
        <img src={profilePhoto} alt="User Profile" style={styles.profileImage} />
        <div style={styles.userInfo}>
          <h2 style={styles.userName}>Full Name: {name}</h2>
          <h2 style={styles.userEmail}>Email: {email}</h2>
        </div>
      </div>
      <h3 style={styles.reviewsHeading}>{userReviews.length > 0 ? "Your Reviews" : "No reviews"}</h3>
      <ul style={styles.reviewList}>
        {userReviews.map((review, index) => (
          <li key={index} style={styles.reviewItem}>
            <button onClick={() => handleDeleteReview(review.id)} style={styles.deleteButton}>
              &#x1F5D1; {/* Unicode for trash can icon */}
            </button>
            <div style={styles.reviewContent}>
              <h4>{review.associatedTruck}: {review.title}</h4>
              <p>Review: {review.review}</p>
              <p>Stars: {review.stars}</p>
              {/* Add additional fields as needed */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const styles = {
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  userEmail: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  reviewsHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  reviewList: {
    listStyleType: 'none',
    padding: 0,
  },
  reviewItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '20px',
  },
  reviewContent: {
    flex: 1,
  },
};
