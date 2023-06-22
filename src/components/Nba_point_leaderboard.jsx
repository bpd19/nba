import React, {useEffect, useRef, useState} from 'react'
import { loadNBA, loadNBALeaderboard } from '../api';
import './Nba_point_leaderboard.css';

const Nba_points =({point })=>{
    return (
        <div className='leader'>
            <div className='names'>
                <div className='table'>Name</div>
                <div className='table'>Country</div>
                <div className='table'>team</div>
                <div className='table'>1 pointers per game</div>
                <div className='table'>3 pointers per game</div>
                <div className='table'>points per game</div>
            </div>
            <div className='players'>
                <div className='table'>{point.player.knownName}</div>
                <div className='table'>{point.player.country.name}</div>
                <div className='table'>{point.team.name}</div>
                <div className='table'>{point.pointers1MadePerGame} ({point.pointers1SuccessRatio}%)</div>
                <div className='table'>{point.pointers3MadePerGame} ({point.pointers3SuccessRatio}%)</div>
                <div className='table'>{point.pointsPerGame}</div>
            </div>

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