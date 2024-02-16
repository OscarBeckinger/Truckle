import { useState, useEffect } from "react";
import "../homepage.css";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

export default function EditProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const usersCollection = collection(db, 'users');
        const userQuery = query(usersCollection, where("id", "==", currentUser.id)); // Replace "userId" with the field name in your Firestore document
        const querySnapshot = await getDocs(userQuery);
        
        if (!querySnapshot.empty) {
          // If document exists, set the user state
          const userData = querySnapshot.docs[0].data();
          setUser(userData);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    // Assuming you have currentUser object with user ID
    const currentUser = { id: "LKg941n13BgpwQprjcUeZH6gDNX2" }; // Replace "user123" with the actual user ID
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
