import React from "react";
import { Highlight } from "react-instantsearch";
import "./searchItemStyles.css";
const SearchMenuItem = ({ hit }) => {
    return (
        <div className="container">
                <img src={hit.imageurl} alt="menu item" height="100" width="100" />
                <h2>
                    <Highlight attribute='title' hit={hit}></Highlight>
                </h2>
                <p>{hit.description}</p>
                <p className="truck-p">Food Truck: {hit.associatedTruck}</p>
        </div>
    );

}
export default SearchMenuItem
