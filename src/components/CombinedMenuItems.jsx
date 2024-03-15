import React from "react";
import { useGetMenuItemsCombined } from "../hooks/useGetMenuItems";
import "./review-box.css"
import MenuItem from "./MenuItem"; 
import "./menu.css";

const CombinedMenuItems = ({ assocTruck }) => {
    const items = useGetMenuItemsCombined(assocTruck);

    return (
        <div className="p-background">
        <div className="container-list">
        {items.map((item, index) => {
            const { description, imageurl, title } = item;
            return (
                <div key={index} className="menu-container">
                    <MenuItem imageurl={imageurl} title={title} description={description} />
                </div>
               
            );
        })}
    </div>
    </div>
);
};

export default CombinedMenuItems;

