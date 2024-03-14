/* AboutRanking.jsx */

import React from 'react';
import './AboutRanking.css';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function AboutRanking() {
  return (
    <>
    <div id="profile">
      <h1>How We Rank Food Trucks</h1>
      <p>At Truckle we aim to provide a fair and transparent ranking of Food Trucks. Utilizing a thoughtful mathematical algorithm, we assess each food truck's performance based on a variety of factors, including its average rating, review volume, and the average review quantity across all food trucks.
Our ranking function employs a thoughtful weighting mechanism, ensuring that each review contributes equitably to the overall rating. By factoring in both the quality and quantity of reviews, we provide a fair and comprehensive assessment of each food truck's offerings.
</p>
    <BlockMath math="\text{Truck Score} = \text{Average Rating} * \frac{\ln{\text{(1 + numOfReviews)}}}{1 + \ln{\text{(1 + totalAvgReviews)}}}" />
    <h2 className='graphTitle'>Number of Reviews and Average Number of Reviews Weighting Graphs</h2>
    <div className='graphs'>
      <img src="https://i.imgur.com/yMuJKnq.png" alt="weighting function avg" className='small-image'/>
      <img src="https://i.imgur.com/v0t4IMB.png" alt="weighting function total reviews" className='small-image' />
    </div>
    </div>
    </>
  );
}

export default AboutRanking;

