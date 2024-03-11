import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
export const useGetFavs = () => {
    const favRef = collection(db, "favorites");
    const [favs, setFavs] = useState([]);
    const getFavs = async () => {
        try {
            let favsArr = [];
            const favSnapshot = await getDocs(favRef);
            favSnapshot.forEach(doc => {
                const favdata = doc.data();
                const { associatedTruck, userID } = favdata;
                const favEntry = {associatedTruck, userID,};
                favsArr.push(favEntry);
            });
            setFavs(favsArr);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getFavs();
    }, []);

    return { favs }

}