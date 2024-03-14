import React from "react";
import './menu.css';

const MenuItem = ({ imageurl, title, description }) => {
   return (
       <>
      
           <img src={imageurl} alt="menu item" height="100" width="100" />
           <h2>{title}</h2>        
           <p>{description}</p>
       </>
   );
}
export default MenuItem
