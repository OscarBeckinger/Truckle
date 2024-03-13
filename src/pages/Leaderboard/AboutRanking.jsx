/* AboutRanking.jsx */

import React from 'react';
import './AboutRanking.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function AboutRanking() {
  return (
    <>
    <Navbar></Navbar>
    <div id="profile">
      <h2 >How We Rank Food Trucks</h2>
      <p >
        Currently, we rank food trucks based on the number of reviews they have received. Food trucks with more reviews are ranked higher on the leaderboard.
      </p>
      <p >
        In the future, we plan to incorporate additional information and criteria for ranking food trucks, providing a more comprehensive and accurate ranking system.
      </p>
    </div>
    <Footer></Footer>
    </>
  );
}

export default AboutRanking;
