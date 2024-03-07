import Board from "./board";
import './style.css';
import trophy from "../../Trophy.png"
export default function Leaderboard(){
      return(
            <div className="App" id='main'> x
       <Board />
           
            <div className="trophy-image">
            <img src = {trophy} className ="trophy"/>
      
      
             </div>
        </div>


      );
     
}