import React from "react";
import "./review-box.css"
const Review = ({name, profilePhoto, title, stars, review}) => {
    return (
    <>
    <div>
        <h3>{name}</h3>
        <img src={profilePhoto} alt="profile" height="50" width="50" />
    </div>
        <h3>{title}</h3>
        <h5>Stars: {stars}</h5>
        <p>{review}</p>
    </>
    );

}

export default Review


