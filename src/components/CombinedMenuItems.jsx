import React from "react";
import { useGetMenuItemsCombined } from "../hooks/useGetMenuItems";
import MenuItem from "./MenuItem"; 
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
                                            <MenuItem imageurl={imageurl} title={title} description={description}></MenuItem> 
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