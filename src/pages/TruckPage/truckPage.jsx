import ReviewInputBox from "../../components/ReviewInputBox";
import TruckMenuItems from "../../components/TruckMenuItems";
import { useGetTruckReviews } from "../../hooks/useGetTruckReviews";
import { useGetTruckMenuItems } from "../../hooks/useGetTruckMenuItems";
export const TruckPage = (truckName) => {
    const reviews = useGetTruckReviews(truckName);
    const items = useGetTruckMenuItems(truckName);
    console.log("ITEMS: ", items);

    return (
        <>
            <h1>{truckName}</h1>
            <ReviewInputBox associatedTruck={truckName}></ReviewInputBox>
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
                                    <h5>Stars: {stars}</h5>
                                    <p>{review}</p>
                                    {/* <button onClick={() => { deleteFunction }}>Delete</button> (if we have time: only make this appear on reviews that match current user id (so only the person who posted the review can delete it)) */}
                                </li>
                            </div>);
                    })}
                </ul>
            </div>
            <h1>truck name: {truckName}</h1>
            <TruckMenuItems assocTruck={truckName}></TruckMenuItems>
        </>
    );
};