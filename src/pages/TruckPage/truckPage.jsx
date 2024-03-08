import ReviewInputBox from "../../components/ReviewInputBox";
import CombinedMenuItems from "../../components/CombinedMenuItems";
import { useGetTruckReviews } from "../../hooks/useGetTruckReviews";
import Reviews from "../../components/Reviews";
export const TruckPage = (truckName) => {
    const reviews = useGetTruckReviews(truckName);
    // this has the code where the menu item page is contained and everything 
    return (
        <>
            <h1>{truckName}</h1>
            {/*<TruckMenuItems assocTruck={truckName}></TruckMenuItems>*/}
            <CombinedMenuItems assocTruck={truckName}></CombinedMenuItems>
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
                                    <Reviews name={name} profilePhoto={profilePhoto} title={title} stars={stars}></Reviews>
                                    {/* <button onClick={() => { deleteFunction }}>Delete</button> (if we have time: only make this appear on reviews that match current user id (so only the person who posted the review can delete it)) */}
                                </li>
                            </div>);
                    })}
                </ul>
            </div>
        </>
    );
};