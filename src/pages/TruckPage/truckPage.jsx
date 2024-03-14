import React, { useEffect, useRef } from "react";
import ReviewInputBox from "../../components/ReviewInputBox";
import CombinedMenuItems from "../../components/CombinedMenuItems";
import { useGetTruckReviews } from "../../hooks/getTruckReviews";
import Reviews from "../../components/Reviews";
import './truckPage.css';


export const TruckPage = (truckName) => {
    const reviews = useGetTruckReviews(truckName);
    const containerRef = useRef(null);

    const scrollTo = (scrollOffset) => {
        containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft + scrollOffset,
            behavior: "smooth" 
        });
    };
    useEffect(() => {
        document.body.style.background = "linear-gradient(to bottom right, #93dfec 0%, #0078b7 100%)";
        return () => {
            document.body.style.background = null;
        };
    }, []);

    return (
        <>
            <div className="center">
                <h1 className="menu-title">{truckName}</h1>
            </div>
            <CombinedMenuItems assocTruck={truckName}></CombinedMenuItems>
            <ReviewInputBox associatedTruck={truckName}></ReviewInputBox>
            <h2>Reviews </h2>
            <div className="reviews-header">
                <div className="scroll-buttons" style={{ textAlign: "right" }}> 
                    <button onClick={() => scrollTo(-50)}>{"<"}</button>
                    <button onClick={() => scrollTo(50)}>{">"}</button>
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