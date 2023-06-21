import React, {useEffect, useRef, useState} from 'react'
import { loadNBA } from '../api';
import './NbaIndex.css';


const Nba_score=({score})=>{
  return(
    <div className='score'>
        <div>
          Name 
          <div>Final score</div>
          <div>Q1</div>
          <div>Q2</div>
          <div>Q3</div>
          <div>Q4</div>
        </div>
        <div className='home'>
          <div>{score.homeTeam.name}</div>
          <div>{score.homeTeam.score.regular}</div>

        </div>
        <div className='away'>
          <div>{score.awayTeam.name}</div>
          <div>{score.awayTeam.score.regular}</div>
        </div>
        
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