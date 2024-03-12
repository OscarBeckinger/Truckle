import React from 'react';
import Profiles from "./projiles";
import { useGetTrucks } from '../../hooks/useGetTrucks';
import { useGetScores } from '../../hooks/useGetScores';
import { useNavigate } from 'react-router-dom';
// By wrapping the handleClick call inside an arrow function inside onClick, you ensure that the function is only called when the button is clicked, not when the component renders. This should resolve the issue of navigating to /AboutRanking when trying to go to the Leaderboard.
function Board() {
      //const { trucks } = useGetTrucksLeaderboard(); 
      //leader board stuff
    const { trucks } = useGetTrucks();
    console.log("TRUCKSSSSSS: ", trucks);
    const namesArr = trucks.map(obj => obj.title);
    const scores = useGetScores(namesArr);
    console.log("SCORE LBP: ", scores);
    let scoresArray = Object.entries(scores);
    scoresArray.sort((a, b) => b[1] - a[1]);
    let sortedScores = Object.fromEntries(scoresArray);
    sortedScores = Object.entries(sortedScores);
    console.log("Scores:", sortedScores);
    const namesInOrder = sortedScores.map(item => item[0]);
    console.log("Names in ORDER: ", namesInOrder);
    let objectsInOrder = []
    for(let i=0; i < namesInOrder.length; i++){
        console.log("CURR NAME: ", namesInOrder[i]);
        let currObj = trucks.find(obj => obj.title === namesInOrder[i]);
        console.log("CURR OBJ: ", currObj);
        objectsInOrder.push(currObj);
    }
    console.log("OBJECTS IN ORDER: ", objectsInOrder);

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
            <Profiles Leaderboard={objectsInOrder} />
        </div>
    );
}

export default Board;
