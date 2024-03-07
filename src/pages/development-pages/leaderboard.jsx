import React from 'react';
import Board from './board';
import './leaderboard.css';
import trophy from '../development-pages/assets/Trophy.png';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function makeConfetti() {
    confetti({
        particleCount: 100, // Number of confetti particles
        spread: 300, // Spread of confetti particles
        startVelocity: 50, // Initial velocity of confetti particles
        ticks: 700, // Duration of confetti animation (increase to make it last longer)
        origin: { y: 0.6 }, // Origin of confetti explosion
        disableForReducedMotion: true, // Disable confetti animation for users with reduced motion preferences
    });

    // Clear confetti after 5 seconds (adjust as needed)
    setTimeout(() => {
        confetti.reset();
    }, 5000); // The time for how long you want the confetti to stay on the screen
}

export default function Leaderboard() {
    makeConfetti(); // Call makeConfetti when component mounts

      return (
            <div className="background">
                  <div className="App" id="main">
                  <Board />
                        <div className="trophy-image">
                              <img src={trophy} className="trophy" alt="Trophy" />
                        </div>
                  </div>
            </div>
    );
}