import React, {useEffect, useRef, useState} from 'react'
import { loadNBA } from '../api';
import './NbaIndex.css';


const Nba_score=({score})=>{
  return(
    <div className='score'>
        <div className='home'>{score.homeTeam.name}</div>
        <div className='home'>{score.homeTeam.score.regular}</div>
        <div className='away'>{score.awayTeam.name}</div>
        <div className='away'>{score.awayTeam.score.regular}</div>
        
    </div>
  );
}

const Nba_scoreList =({scores})=>{
  if(scores===null){
    return <div>Loading ...</div>
  }
  if(scores.length===0){
    return <div>No scores</div>
  }
  return(
    <div>
      {
        scores.map((score)=>(
        <Nba_score score={score} />
        ))
      }
    </div>
  )
}

function NbaIndex() {
  const searchRef =useRef();
  const [score, setScore]=useState(null);

  useEffect(()=>{
    loadNBA().then((score)=> setScore(score))
  });

  return (
    <div>NbaIndex
      <Nba_scoreList scores={score}/>
    </div>
  )
}

export default NbaIndex;