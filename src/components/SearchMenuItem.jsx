import React from "react";
import { Highlight } from "react-instantsearch";
const SearchMenuItem = ({ hit }) => {
    return (
        <div>
                <h2>
                    <Highlight attribute='title' hit={hit}></Highlight>
                </h2>
                <img src={hit.imageurl} alt="menu item" height="100" width="100" />
                <p>{hit.description}</p>
                <p>{hit.associatedTruck}</p>
        </div>
    );

}
export default SearchMenuItem