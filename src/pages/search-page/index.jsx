//import CombinedMenuItems from "../../components/CombinedMenuItems";
import React from "react";
import Search from "../../components/Search";
import TruckLocations from "../../components/TruckLocations";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./styles.css";

export const Searchpage = () => {
    return (
        <div className="scontainer">
            <Navbar />
            <div className="background"> 
                <div className="scontent">
                    <Search />
                    <div style={{ minHeight: "100px" }}></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
