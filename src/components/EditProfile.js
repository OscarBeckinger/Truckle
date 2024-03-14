
//   return (
//     <>
//       <div style={styles.profileContainer}>
//         <img src={profilePhoto} alt="User Profile" style={styles.profileImage} />
//         <div style={styles.userInfo}>
//           <h2 style={styles.userName}>Full Name: {name}</h2>
//           <h2 style={styles.userEmail}>Email: {email}</h2>
//         </div>
//       </div>
//       <h3 style={styles.reviewsHeading}>{userReviews.length > 0 ? "Your Reviews" : "No reviews"}</h3>
//       <ul style={styles.reviewList}>
//         {userReviews.map((review, index) => (
//           <li key={index} style={styles.reviewItem}>
//             <button onClick={() => handleDeleteReview(review.id)} style={styles.deleteButton}>
//               &#x1F5D1; {/* Unicode for trash can icon */}
//             </button>
//             <div style={styles.reviewContent}>
//               <h4>{review.associatedTruck}: {review.title}</h4>
//               <p>Review: {review.review}</p>
//               <p>Stars: {review.stars}</p>
//               {/* Add additional fields as needed */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

