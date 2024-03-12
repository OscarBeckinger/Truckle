import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const useGetAllReviews = () => {
    const reviewsRef = collection(db, "reviews");
    const [reviews, setReviews] = useState([]);
    const getAllReviews = async () => {
        try {
            let reviewsArr = [];
            const reviewSnapshot = await getDocs(reviewsRef);
            reviewSnapshot.forEach(doc => {
                const reviewdata = doc.data();
                const { title, associatedTruck, stars } = reviewdata;
                const reviewEntry = {
                    title,
                    associatedTruck,
                    stars,
                };
                reviewsArr.push(reviewEntry);
            });
            setReviews(reviewsArr);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAllReviews();
    }, []);

    return { reviews }
}