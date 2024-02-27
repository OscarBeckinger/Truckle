import { useEffect, useState } from "react";
import { query, collection, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetMenuItemsCombined = (truckName) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const getMenuItems = async () => {
            try {
                let menuArr = [];
                let menuCollectionRef;

                if (truckName === "None") {
                    menuCollectionRef = collection(db, "menuitems");
                    const menuSnapshot = await getDocs(menuCollectionRef);
                    menuSnapshot.forEach(doc => {
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
                } else {
                    menuCollectionRef = collection(db, "menuitems");
                    const queryMenuItems = query(menuCollectionRef, where("associatedTruck", "==", truckName));
                    const unsubscribe = onSnapshot(queryMenuItems, (snapshot) => {
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
                        setMenuItems(menuArr);
                    });

                    return () => unsubscribe();
                }

                setMenuItems(menuArr);
            } catch (error) {
                console.error(error);
            }
        };

        getMenuItems();

        return () => { }; // cleanup function
    }, [truckName]);

    return menuItems;
};