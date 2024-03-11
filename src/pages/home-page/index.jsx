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
//import { useGetMenuItemsCombinedd } from '../../hooks/useGetFavorites';


export const Homepage = () => {
    // const { favor } = useGetTrucks();
    const {truckReviews} = useGetFavorites();
    const { trucks } = useGetTrucks();
    const { userID } = useGetUserInfo();
    const navigate = useNavigate();
    const [clickedIcons, setClickedIcons] = useState(Array(trucks.length).fill(false));
    const handleClick = (navstr) => {
        // state object can contain any data you want to pass to the destination page.
        navigate(navstr);
    };

    const handleStarClick = (index, e) => {
        e.stopPropagation(); // Prevent event propagation
        // Toggle the clicked state for the clicked icon
        const updatedClickedIcons = [...clickedIcons];
        updatedClickedIcons[index] = !updatedClickedIcons[index];
        setClickedIcons(updatedClickedIcons);
        console.log(userID);
        console.log(truckReviews.length);
      };

    return (
        <>
            {/* is this proper way to do navigation? */}
            <Navbar></Navbar>
            <div className="homepage">
                <div className="truckle-home">
                    <img src = {home} className ="home"/></div>

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
                  onClick={(e) => handleStarClick(index, e)} // Pass event and index to handleStarClick
                  style={{ cursor: 'pointer', fill: clickedIcons[index] ? 'red' : 'inherit'}} // Apply yellow color if clicked
                />

                                <div class="move-truck"></div>
                                <img src = {move} className ="move"/>             
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};