import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const useGetTrucks = () => {
    const trucksCollectionRef = collection(db, "foodtrucks");
    const [trucks, setTrucks] = useState([]);
    const getTrucks = async () => {
        try {
            let trucksArr = [];
            const truckSnapshot = await getDocs(trucksCollectionRef);
            truckSnapshot.forEach(doc => {
                const truckdata = doc.data();
                const { description, imageurl, title } = truckdata;
                const truckEntry = {
                    description,
                    imageurl,
                    title,
                };
                trucksArr.push(truckEntry);
            });
            setTrucks(trucksArr);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getTrucks();
    }, []);

    return { trucks }
}