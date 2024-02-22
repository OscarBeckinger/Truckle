import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetUserReviews = () => {
    const reviewsCollectionRef = collection(db, "reviews");
    const [userReviews, setuserReviews] = useState([]);
    const { userID } = useGetUserInfo(); 
    const getUserReviews = async () => {
        try {
            let reviewsArr = [];
            const q = query(collection(db, "reviews"), where("userID", "==", userID));
            const userReviewsSnapshot = await getDocs(q);
            userReviewsSnapshot.forEach(doc => {
                const reviewData = doc.data();
                const { associatedTruck, createdAt, review, stars, title} = reviewData;
                const reviewEntry = {
                  associatedTruck,
                  createdAt,
                  review,
                  stars,
                  title
                };
                reviewsArr.push(reviewEntry);
            });
            setuserReviews(reviewsArr);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
      getUserReviews();
    }, []);

    return { userReviews }
}