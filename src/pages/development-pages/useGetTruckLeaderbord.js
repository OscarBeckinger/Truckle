import { db } from "../../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';


export const useGetTrucksLeaderboard = () => {
      const trucksCollectionRef = collection(db, "foodtrucks");
      const [trucks, setTrucks] = useState([]);
  
      const getTrucks = async () => {
          try {
              let trucksArr = [];
              const truckSnapshot = await getDocs(trucksCollectionRef);
              const truckPromises = truckSnapshot.docs.map(async (doc) => {
                  const truckdata = doc.data();
                  const { description, imageurl, title, navStr } = truckdata;
                 // Assuming you're using Firestore and have 'db' initialized
                  // Fetch review count for this truck
      const reviewsRef = collection(db, "reviews");
      const querySnapshot = await getDocs(query(reviewsRef, where("associatedTruck", "==", title)));
      const reviewCount = querySnapshot.size;


  
                  const truckEntry = {
                      description,
                      imageurl,
                      title,
                      navStr,
                      reviewCount, // Add review count to truck entry
                  };
                  trucksArr.push(truckEntry);
              });
  
              await Promise.all(truckPromises);
              setTrucks(trucksArr);
          } catch (err) {
              console.error(err);
          }
      };
  
      useEffect(() => {
          getTrucks();
      }, []);
  
      return { trucks };
  };