import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useGetUserReviews } from "../hooks/useGetUserReviews";
//import { useState } from "react";
import { doc, deleteDoc, addDoc, collection, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { db } from "../config/firebase-config";


export const handleDeleteFavorites = async (userID, associatedTruck) => {
      // Display a confirmation dialog
      const confirmed = window.confirm("Are you sure you want to remove from favorites?");
      // If the user confirms deletion, proceed with deletion
      if (confirmed) {
          try {
              // Construct a query to find the document(s) with matching userID and associatedTruck
              const q = query(
                  collection(db, "favorites"),
                  where("userID", "==", userID),
                  where("associatedTruck", "==", associatedTruck)
              );
  
              // Execute the query and get the matching document(s)
              const querySnapshot = await getDocs(q);
  
              // Loop through the matching document(s) and delete each one
              querySnapshot.forEach(async (doc) => {
                  await deleteDoc(doc.ref);
              });
  
              console.log("Favorites successfully deleted.");
              return true;
          } catch (error) {
              console.error("Error deleting favorites:", error);
              return false;
          }
      } else {
          // Do nothing if the user cancels
          // alert("Deletion cancelled.");
          return false;
      }
  };

    export const handleAddFavorites =  (associatedTruck, userID) => {
      const reviewsCollectionRef = collection(db, "favorites");
            const addFavorite = async ({ associatedTruck, userID }) => {
                  await addDoc(reviewsCollectionRef, {
                     associatedTruck,
                     userID,
                  });
              }

      return { addFavorite }
  };