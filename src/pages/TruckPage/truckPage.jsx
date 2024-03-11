import React from "react";
import ReviewInputBox from "../../components/ReviewInputBox";
import CombinedMenuItems from "../../components/CombinedMenuItems";
import { useGetTruckReviews } from "../../hooks/useGetTruckReviews";
import Reviews from "../../components/Reviews";
import "./truckPage.css";

export const TruckPage = (truckName) => { // Destructuring truckName from props object
    const reviews = useGetTruckReviews(truckName);

    return (
        <>
            <div className="center">
                <h1 className="menu-title">{truckName}</h1>
            </div>

            <CombinedMenuItems assocTruck={truckName}></CombinedMenuItems>
            <ReviewInputBox associatedTruck={truckName}></ReviewInputBox>
            <h2>Reviews: </h2>
            <p>Review Count: {reviews.length}</p>
            <div className="reviews">
                <ul>
                    {reviews.map((truckReview) => {
                        const { name, profilePhoto, review, stars, title } = truckReview;
                        return (
                            <div className='list-item-div' key={truckReview.id}>
                                <li>
                                    <Reviews name={name} profilePhoto={profilePhoto} title={title} stars={stars}></Reviews>
                                    {/* <button onClick={() => { deleteFunction }}>Delete</button> (if we have time: only make this appear on reviews that match current user id (so only the person who posted the review can delete it)) */}
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default TruckPage;