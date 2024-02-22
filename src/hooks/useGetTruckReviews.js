import { useEffect, useState } from "react";
import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
//import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTruckReviews = (truckName) => {
    const [truckReviews, setTruckReviews] = useState([]);
    //const { userID } = useGetUserInfo(); (adding this makes other users profiles photos go away for some reason)

    useEffect(() => {
        const reviewCollectionRef = collection(db, "reviews");
        const getTruckReviews = async () => {
            let unsubscribe;
            try {
                const queryReviews = query(reviewCollectionRef, where("associatedTruck", "==", truckName), orderBy("createdAt"));
                unsubscribe = onSnapshot(queryReviews, (snapshot) => {
                    let docs = [];
                    snapshot.forEach((doc) => {
                        const reviewData = doc.data();
                        const { createdAt, review, stars, title, profilePhoto, name } = reviewData;
                        const reviewEntry = {
                            id: doc.id,
                            createdAt,
                            review,
                            stars,
                            title,
                            profilePhoto,
                            name,
                        };
                        docs.push(reviewEntry);
                    });
                    setTruckReviews(docs);
                });
            } catch (error) { console.error(error) }
            return () => unsubscribe();
        };

        getTruckReviews();

        return () => { }; // cleanup function
    }, [truckName]);

    return truckReviews;
};
