import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";
export const useGetFavorites = (userID) => {
    const reviewsCollectionRef = collection(db, "favorites");
    const [userFavorites, setuserFavorites] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "favorites"), where("userID", "==", userID));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsArr = [];
            querySnapshot.forEach((doc) => {
                const reviewData = doc.data();
                const { associatedTruck, userID} = reviewData;
                const reviewEntry = {
                    id: doc.id,
                    associatedTruck,
                    userID,
                };
                reviewsArr.push(reviewEntry);
            });
            setuserFavorites(reviewsArr);
        });

        // Cleanup function to unsubscribe from the snapshot listener
        return () => unsubscribe();
    }, [userID]);

    return { userFavorites };
};
