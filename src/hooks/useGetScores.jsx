import { useGetTrucks } from "./useGetTrucks";
import { useGetAllReviews } from "./useGetAllReviews";

function calculateWeightedRating(avgRating, numReviews, avgNumReviews) {
    return (avgRating * Math.log(1 + numReviews)) / (1 + Math.log(1 + avgNumReviews));
}

export const useGetScores = (truckNames) => {
    const { trucks } = useGetTrucks();
    const allReviews  = useGetAllReviews();  
    const avgOfReviews = allReviews.reviews.length / trucks.length;  //getting the average amount of all reviews (total reviews (for all trucks) / amount of trucks)
    const scores = {};

    truckNames.forEach(truckName => {
        const reviews = allReviews.reviews.filter(obj => obj.associatedTruck === truckName);
        const stars = reviews.map(obj => obj.stars);
        const reviewCount = stars.length;   //getting number of reviews for specific truck
        const sum = stars.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / reviewCount;  //getting average score of reviews of specific truck
        const score = calculateWeightedRating(average, reviewCount, avgOfReviews); //calculating weighting 
        scores[truckName] = score;
    });

    return scores;
    
}