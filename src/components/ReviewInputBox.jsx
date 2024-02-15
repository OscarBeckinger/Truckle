import React from 'react';
import { useState } from "react";
import { useAddReview } from '../hooks/useAddReview';


const ReviewInputBox = ({ associatedTruck }) => {
  const { addReview } = useAddReview();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    addReview({ title, review, stars, associatedTruck });
    setTitle("");
    setReview("");
    setStars("");
  };

  return (
    <>
      <div className="review-box">
        <form className='add-review' onSubmit={onSubmit}>
          <input type='text' placeholder='Title' value={title} required onChange={(e) => setTitle(e.target.value)} />
          <input type='text' placeholder='Review' value={review} required onChange={(e) => setReview(e.target.value)} />
          <input type='text' placeholder='Stars' value={stars} required onChange={(e) => setStars(e.target.value)} />
          <button type='submit'>Add Review</button>
        </form>
      </div>
    </>
  );
}

export default ReviewInputBox;