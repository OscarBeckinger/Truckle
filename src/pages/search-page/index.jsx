//import CombinedMenuItems from "../../components/CombinedMenuItems";
import React from "react";
import Search from "../../components/Search";
import TruckLocations from "../../components/TruckLocations";

import "./styles.css";

export const Searchpage = () => {
    return (
        <div className="scontainer">
            <div className="background"> 
                <div className="scontent">
                    <Search />
                    <div style={{ minHeight: "100px" }}></div>
                </div>
            </div>
        </div>
    );
}
