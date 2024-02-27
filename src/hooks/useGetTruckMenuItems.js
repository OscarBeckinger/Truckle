import { useEffect, useState } from "react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetTruckMenuItems = (truckName) => {
    const [truckMenuItems, setTruckMenuItems] = useState([]);
    const menuItemsCollectionRef = collection(db, "menuitems");
    useEffect(() => {
        const getTruckMenuItems = async () => {
            let unsubscribe;
            try {
                //removing where clause query(menuItemsCollectionRef, where("associatedTruck", "==", truckName), orderBy("createdAt"))
                const queryMenuItems = query(menuItemsCollectionRef, where("associatedTruck", "==", truckName));
                unsubscribe = onSnapshot(queryMenuItems, (snapshot) => {
                    let menuArr = [];
                    snapshot.forEach((doc) => {
                        const menudata = doc.data();
                        const { associatedTruck, imageurl, description, title } = menudata;
                        const menuEntry = {
                            associatedTruck,
                            description,
                            imageurl,
                            title,
                        };
                        menuArr.push(menuEntry);
                    });
                    setTruckMenuItems(menuArr);
                });
            } catch (error) { console.error(error) }
            return () => unsubscribe();
        };

        getTruckMenuItems();

        return () => { }; // cleanup function
    }, [truckName]);

    return truckMenuItems;
};
