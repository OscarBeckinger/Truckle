import React from "react";
import { useGetMenuItemsCombined } from "../hooks/useGetMenuItems";
import "./review-box.css";
import "./menu.css";

const CombinedMenuItems = ({ assocTruck }) => {
    const items = useGetMenuItemsCombined(assocTruck);

    return (
        <>
            <div className="menupage">
                <div className="heading">Menu Items</div>
                <div>
                    <ul>
                        {items.map((item, index) => {
                            const { description, imageurl, title } = item;
                            return (
                                <div key={index} className="container-list">
                                    <li>
                                        <div className="container">
                                            <img src={imageurl} alt="menu item" height="100" width="100" />
                                            <h2>{title}</h2>  
                                            <p>{description}</p>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CombinedMenuItems;