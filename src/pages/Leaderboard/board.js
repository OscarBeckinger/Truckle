import React from 'react';
import Profiles from "./projiles";
import { useGetTrucksLeaderboard } from '../../hooks/useGetTruckLeaderbord';
import { useNavigate } from 'react-router-dom';
// By wrapping the handleClick call inside an arrow function inside onClick, you ensure that the function is only called when the button is clicked, not when the component renders. This should resolve the issue of navigating to /AboutRanking when trying to go to the Leaderboard.
function Board() {
      const { trucks } = useGetTrucksLeaderboard();
      const navigate = useNavigate();
      const handleClick = (navstr) => {
          // state object can contain any data you want to pass to the destination page.
          navigate(navstr);
      };

    return (
        <div>
            <div className='board'>
                <h1 className='leaderboard'> UCLA Food Truck LeaderBoard</h1>
                <div className='duration'>
                    <button onClick={() => handleClick("/AboutRanking")}>How do we Rank?</button>
                </div>
            </div>
            <Profiles Leaderboard={trucks} />
        </div>
    );
}

export default Board;
