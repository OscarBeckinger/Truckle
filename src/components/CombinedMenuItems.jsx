import React from "react";
import { useGetMenuItemsCombined } from "../hooks/useGetMenuItems";
import "./review-box.css"
import "./menu.css"


const CombinedMenuItems = ({ assocTruck }) => {
    const items = useGetMenuItemsCombined(assocTruck);

    return (
        <>
            <div className="heading">Menu Items </div>
            <div>
            
                <ul>
                    {items.map((item, index) => {
                        const { description, imageurl, title } = item;
                        return (
                            <div key={index}>
                                <li>
                                    <img src={imageurl} alt="menu item" height="100" width="100" />
                                    <h2>{title}</h2>
                                    
                                    <p>{description}</p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
           
        </>
    );
};

export default CombinedMenuItems;