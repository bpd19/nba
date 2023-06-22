import React, {useEffect, useRef, useState} from 'react'
import { loadNBA, loadNBALeaderboard } from '../api';
import './NbaIndex.css';

const Nba_points =({point })=>{
    return (
        <div>
            <div>{point.player.knownName}</div>
            <div>{point.pointers1MadePerGame} ({point.pointers1SuccessRatio}%)</div>
            <div>{point.pointers3MadePerGame} ({point.pointers3SuccessRatio}%)</div>
            <div>{point.pointsPerGame}</div>
        </div>
    );
}

const Nba_pointsList =({points})=>{
    if(points===null){
      return <div>Loading ...</div>
    }
    if(points.length===0){
      return <div>No leaderboard</div>
    }
    return(
      <div>
        {
          points.map((point)=>(
          <Nba_points point={point} />
          ))
        }
      </div>
    )
  }

function Nba_point_leaderboard() {
    const searchRef =useRef();
  const [point, setPoint]=useState(null);

  useEffect(()=>{
    loadNBALeaderboard().then((point)=> setPoint(point))
  });
  return (
    <Nba_pointsList points={point}/>
  )
}

export default Nba_point_leaderboard