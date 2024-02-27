import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";

//
export const useGetMenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const menuCollectionRef = collection(db, "menuitems");
        const getMenuItems = async () => {
            try {
                let menuArr = [];
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
                setMenuItems(menuArr);
            } catch (err) {
                console.error(err);
            }
        };
        getMenuItems();

        return () => { };
    }, []);
    console.log("MENU ITEMS: ", menuItems)
    return menuItems;
};
