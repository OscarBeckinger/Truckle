import { useGetTrucks } from '../../hooks/useGetTrucks';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import home from '../home-page/assets/TrucklyImageSmall.png';
import move from '../home-page/assets/movingTruck.png';
import { CiStar } from "react-icons/ci";
import './homepage.css';
import {Fa} from "react-icons/fa";
import { useState } from "react";
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import TruckLocations from '../../components/TruckLocations';
import {handleDeleteFavorites, handleAddFavorites}  from "../../hooks/handleFavorites";
import { useEffect } from 'react';

export const Homepage = () => {
    const { addFavorite } = handleAddFavorites();
    const { userID } = useGetUserInfo();
    const {userFavorites} = useGetFavorites(userID);
    const { trucks } = useGetTrucks();
    const navigate = useNavigate();
    const [clickedIcons, setClickedIcons] = useState(Array(trucks.length).fill(false));
    const handleClick = (navstr) => {
        // state object can contain any data you want to pass to the destination page.
        navigate(navstr);
    };

    useEffect(() => {
        if (trucks.length > 0 && userFavorites.length > 0) {
            // Initialize clickedIcons by comparing associatedTruck fields
            const initClickedIcons = trucks.map(truck =>
                // Check if the truck's associatedTruck matches any in userFavorites
                userFavorites.some(favorite => favorite.associatedTruck === truck.title)
            );
            // Update the clickedIcons state with the new array
            setClickedIcons(initClickedIcons); // <-- This line ensures same order as trucks
        }
    }, [trucks, userFavorites]);
    
    const handleStarClick = (index, e, associatedTruck) => {
        e.stopPropagation(); // Prevent event propagation
        const updatedClickedIcons = [...clickedIcons];
        const isCurrentlyFavorited = updatedClickedIcons[index];
        if (isCurrentlyFavorited) {
            // improvement is to pass in the doc.id for it but we will work for a manual search!
            handleDeleteFavorites(userID, associatedTruck)
              .then(deleted => {
                if (deleted) {
                  updatedClickedIcons[index] = !isCurrentlyFavorited;
                  setClickedIcons(updatedClickedIcons);
                }
              })
              .catch(error => {
                console.error("Error deleting favorites:", error);
              });
          } else {
          // If the item is not currently favorited, add it to favorites
          console.log(associatedTruck);
          addFavorite({
            associatedTruck: associatedTruck,
            userID: userID
          });
             // Update the state to reflect the change
        updatedClickedIcons[index] = !isCurrentlyFavorited;
        setClickedIcons(updatedClickedIcons);
        }
      
      
        console.log(userID);
        console.log(userFavorites.length);
      };

    return (
<>
            <Navbar></Navbar>
           
<div className="homepage">
    <div className="truckle-home">
        <img src = {home} className ="home"/>
    </div>

    <div class="background-top"></div>
    <div class="background-bottom"></div>
   
                                          
    <div className="foodTruckList">
        {trucks.map((truck, index) => {
        const { description, imageurl, title, navStr } = truck;
        return (
        <div className="foodTruckItem" key={index} onClick={() => handleClick(navStr)}>
                                <div style={{ backgroundImage: `url(${imageurl})` }}></div>
                                 <h2 className="truckTitle">{title}</h2>
                                <p>{description}</p>
                                <CiStar 
                  size="3em" 
                  onClick={(e) => handleStarClick( index, e, truck.title)} // Pass event and index to handleStarClick
                  style={{ cursor: 'pointer', fill: clickedIcons[index] ? 'red' : 'inherit'}} // Apply yellow color if clicked
                />
        
        </div>
                        );
                    })} 
    </div>
  
    <div className="truck">

    <div class="move-truck"></div>
    <img src = {move} className ="move"/>  
    </div> 
</div>
                            <div className="locations">
                            <TruckLocations></TruckLocations>
                             </div>


  
</>
    );
};