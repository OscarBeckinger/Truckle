import React, { useRef } from "react";
import ReviewInputBox from "../../components/ReviewInputBox";
import CombinedMenuItems from "../../components/CombinedMenuItems";
import { useGetTruckReviews } from "../../hooks/useGetTruckReviews";
import Reviews from "../../components/Reviews";

export const TruckPage = (truckName) => {
    const reviews = useGetTruckReviews(truckName);
    const containerRef = useRef(null);

    const scrollRight = () => {
        containerRef.current.scrollLeft += 400; 
    };

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 400; 
    };
    

    return (
        <>
            <CombinedMenuItems assocTruck={truckName}></CombinedMenuItems>
            <ReviewInputBox associatedTruck={truckName}></ReviewInputBox>
            <h2>Reviews: </h2>
            <div className="reviews-header">
                <div className="scroll-buttons" style={{ textAlign: "right" }}> 
                    <button onClick={scrollLeft}>{"<"}</button>
                    <button onClick={scrollRight}>{">"}</button>
                </div>
            </div>
            <div className="reviews-container" ref={containerRef}>
                {reviews.map((truckReview, index) => {
                    const { name, profilePhoto, review, stars, title } = truckReview;
                    return (
                        <div key={index} className="reviewContainer">
                            <Reviews name={name} profilePhoto={profilePhoto} title={title} stars={stars} review={review}></Reviews>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TruckPage;
