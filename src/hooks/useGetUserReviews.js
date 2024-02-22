import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetUserReviews = () => {
    const reviewsCollectionRef = collection(db, "reviews");
    const [userReviews, setuserReviews] = useState([]);
    const { userID } = useGetUserInfo(); 

    useEffect(() => {
        const q = query(collection(db, "reviews"), where("userID", "==", userID));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsArr = [];
            querySnapshot.forEach((doc) => {
                const reviewData = doc.data();
                const { associatedTruck, createdAt, review, stars, title } = reviewData;
                const reviewEntry = {
                    id: doc.id,
                    associatedTruck,
                    createdAt,
                    review,
                    stars,
                    title
                };
                reviewsArr.push(reviewEntry);
            });
            setuserReviews(reviewsArr);
        });

        // Cleanup function to unsubscribe from the snapshot listener
        return () => unsubscribe();
    }, [userID]);

    return { userReviews };
};
