import React, {useEffect, useRef, useState} from 'react'
import { loadNBA, loadNBALeaderboard, loadNBARebound } from '../api';
import './Nba_rebound.css';

const Nba_rebounds =({rebound })=>{
    return (
        <div className='leaders'>
            <div className='names'>
                <div className='tables'>Name</div>
                <div className='tables'>Country</div>
                <div className='tables'>team</div>
                <div className='tables'>Defensive rebounds count</div>
                <div className='tables'>Defensive rebounds per game</div>
                <div className='tables'>Offensive rebounds count</div>
                <div className='tables'>Offensive rebounds per game</div>
                <div className='tables'>Total rebouns count</div>
                <div className='tables'>Total rebouns per game</div>
                
            </div>
            <div className='players'>
                <div className='tables'>{rebound.player.knownName}</div>
                <div className='tables'>{rebound.player.country.name}</div>
                <div className='tables'>{rebound.team.name}</div>
                <div className='tables'>{rebound.defensiveReboundsCount}</div>
                <div className='tables'>{rebound.defensiveReboundsPerGame}</div>
                <div className='tables'>{rebound.offensiveReboundsCount}</div>
                <div className='tables'>{rebound.offensiveReboundsPerGame}</div>
                <div className='tables'>{rebound.totalReboundsCount}</div>
                <div className='tables'>{rebound.totalReboundsPerGame}</div>
            </div>

        </div>
    );
}

const Nba_reboundsList =({rebounds})=>{
    if(rebounds===null){
      return <div>Loading ...</div>
    }
    if(rebounds.length===0){
      return <div>No leaderboard</div>
    }
    return(
      <div>
        {
          rebounds.map((rebound)=>(
          <Nba_rebounds rebound={rebound} />
          ))
        }
      </div>
    )
  }

function Nba_rebound() {
    const searchRef =useRef();
    const [rebound, setRebound]=useState(null);

  useEffect(()=>{
    loadNBARebound().then((rebound)=> setRebound(rebound))
  });
  return (
    <Nba_reboundsList rebounds={rebound}/>
  )
}

export default Nba_rebound