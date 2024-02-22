import { useGetUserInfo } from "../../../hooks/useGetUserInfo";
import { useGetUserReviews } from "../../../hooks/useGetUserReviews";
import { useState } from "react";

export default function EditProfile() {
  const { name, profilePhoto, userID, isAuth, email } = useGetUserInfo();
  const { userReviews } = useGetUserReviews();
  // const { userReviews, setUserReviews } = useGetUserReviews();

  // const { userReviews } = useGetUserReviews();
  // const [reviews, setReviews] = useState(userReviews);
  
  const handleDeleteReview = (index) => {
    // Create a copy of userReviews array
    const updatedReviews = [...userReviews];
    
    // Remove the element at the specified index
    updatedReviews.splice(index, 1);
    
    // // Update the userReviews state with the modified array
    // setUserReviews(updatedReviews);
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

      <h3 style={styles.reviewsHeading}>Your Reviews:</h3>
      <ul style={styles.reviewList}>
        {userReviews.map((review, index) => (
          <li key={index} style={styles.reviewItem}>
            <button onClick={() => handleDeleteReview(index)} style={styles.deleteButton}>
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
