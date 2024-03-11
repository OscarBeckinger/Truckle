import React, { useRef } from "react";
import ReviewInputBox from "../../components/ReviewInputBox";
import CombinedMenuItems from "../../components/CombinedMenuItems";
import { useGetTruckReviews } from "../../hooks/useGetTruckReviews";
import Reviews from "../../components/Reviews";

export const TruckPage = (truckName) => {
    const reviews = useGetTruckReviews(truckName);
    const containerRef = useRef(null);

    const scrollRight = () => {
        containerRef.current.scrollLeft += 200; // Adjust as per your design
    };

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 200; // Adjust as per your design
    };

    return (
        <>
            <div className="reviews-header">
                <h1>{truckName}</h1>
                <div className="scroll-buttons">
                    <button onClick={scrollLeft}>{"<"}</button>
                    <button onClick={scrollRight}>{">"}</button>
                </div>
            </div>
            <CombinedMenuItems assocTruck={truckName}></CombinedMenuItems>
            <ReviewInputBox associatedTruck={truckName}></ReviewInputBox>
            <h2>Reviews: </h2>
            <p>Review Count: {reviews.length}</p>
            <div className="reviews-container" ref={containerRef}>
                {reviews.map((truckReview, index) => {
                    const { name, profilePhoto, review, stars, title } = truckReview;
                    return (
                        <div key={index} className="reviewContainer">
                            <Reviews name={name} profilePhoto={profilePhoto} title={title} stars={stars}></Reviews>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TruckPage;