import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo"


export const useAddReview = () => {
    const reviewsCollectionRef = collection(db, "reviews");
    const { name, profilePhoto, userID, isAuth } = useGetUserInfo();
    const addReview = async ({ title, review, stars, associatedTruck }) => {
        await addDoc(reviewsCollectionRef, {
            name,           //from useGetUserInfo
            profilePhoto,   //from useGetUserInfo
            userID,         //from useGetUserInfo
            title,
            stars,
            review,
            associatedTruck,
            isAuth,          //from useGetUserInfo
            createdAt: serverTimestamp(),
        });
    }
    return { addReview }
};