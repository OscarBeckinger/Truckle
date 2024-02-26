import ReviewInputBox from "../../../components/ReviewInputBox";
import { useGetTruckReviews } from "../../../hooks/useGetTruckReviews";
import { useLocation } from "react-router-dom";
export const TruckPage = () => {
    const location = useLocation();
    let title = location.state.title; // Extracting the title from location.state
    console.log(title); // Logging the original title
    // Check if the title is "Thai 8E8", and if so, modify it to "8E8 Thai"
    if (title === "Thai 8E8") {
        title = "8E8 Thai";
    }
    const reviews = useGetTruckReviews(title);
    
    return (
        <>
            <h1>{title}</h1>
            <ReviewInputBox associatedTruck={title}></ReviewInputBox>
            <h2>Reviews: </h2>
            <p>Review Count: {reviews.length}</p>
            <div className="reviews">
                <ul>
                    {reviews.map((truckReview) => {
                        const { name, profilePhoto, review, stars, title } = truckReview;
                        return (
                            <div className='list-item-div'>
                                <li>
                                    <div>
                                        <h3>{name}</h3>
                                        <img src={profilePhoto} alt="profile" height="50" width="50" />
                                    </div>
                                    <h3>{title}</h3>
                                    <h5>Staasdfrs: {stars}</h5>
                                    <p>{review}</p>
                                    {/* <button onClick={() => { deleteFunction }}>Delete</button> (if we have time: only make this appear on reviews that match current user id (so only the person who posted the review can delete it)) */}
                                </li>
                            </div>);
                    })}
                </ul>
            </div>
        </>
    );

};