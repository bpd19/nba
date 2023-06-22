import React, {useEffect, useRef, useState} from 'react'
import {loadNBAStandings } from '../api';
import './Nba_standings.css';
//for (let i = 0; i < myObj.cars.length; i++) {
  //x += myObj.cars[i];
//}

const Nba_standing =({standing })=>{
  //   let x= standing.standings.overall.length;
  //   let text="";
  //   let names="";
  //   for (let i = 0; i < x; i++) {
  //     text += standing.standings.overall[i].position +"\n";
  //     names += standing.standings.overall[i].team.name+ "\n";

  //  };

  //In team positon 3 I put an id because the name of that team didn't apear
    return (
        <div className='first'>
          <div>{standing.tournament.name}</div>
            <div>{standing.round.name}</div>
        <div className='standings'>
            <div className='positions'>
              <div className='tag'>Position   Team</div>
              <div className='table1'>{standing.standings.overall[0].position}   {standing.standings.overall[0].team.name}</div>
              <div className='table1'>{standing.standings.overall[1].position}   {standing.standings.overall[1].team.name}</div>
              <div className='table1'>{standing.standings.overall[2].position}   {standing.standings.overall[2].team.name}</div>
              <div className='table1'>{standing.standings.overall[3].position}   {standing.standings.overall[3].team.id}</div>
              <div className='table1'>{standing.standings.overall[4].position}   {standing.standings.overall[4].team.name}</div>
              <div className='table1'>{standing.standings.overall[5].position}   {standing.standings.overall[5].team.name}</div>
              <div className='table1'>{standing.standings.overall[6].position}   {standing.standings.overall[6].team.name}</div>
              <div className='table1'>{standing.standings.overall[7].position}   {standing.standings.overall[7].team.name}</div>
              <div className='table1'>{standing.standings.overall[8].position}   {standing.standings.overall[8].team.name}</div>
              <div className='table1'>{standing.standings.overall[9].position}   {standing.standings.overall[9].team.name}</div>
            </div>
            <div className='won'>
              <div className='tag'>Won</div>
              <div className='table1'>{standing.standings.overall[0].won} </div>
              <div className='table1'>{standing.standings.overall[1].won} </div>
              <div className='table1'>{standing.standings.overall[2].won} </div>
              <div className='table1'>{standing.standings.overall[3].won} </div>
              <div className='table1'>{standing.standings.overall[4].won} </div>
              <div className='table1'>{standing.standings.overall[5].won} </div>
              <div className='table1'>{standing.standings.overall[6].won} </div>
              <div className='table1'>{standing.standings.overall[7].won} </div>
              <div className='table1'>{standing.standings.overall[8].won} </div>
              <div className='table1'>{standing.standings.overall[9].won} </div>
            </div>
            <div className='lost'>
              <div className='tag'>Lost</div>
              <div className='table1'>{standing.standings.overall[0].lost} </div>
              <div className='table1'>{standing.standings.overall[1].lost} </div>
              <div className='table1'>{standing.standings.overall[2].lost} </div>
              <div className='table1'>{standing.standings.overall[3].lost} </div>
              <div className='table1'>{standing.standings.overall[4].lost} </div>
              <div className='table1'>{standing.standings.overall[5].lost} </div>
              <div className='table1'>{standing.standings.overall[6].lost} </div>
              <div className='table1'>{standing.standings.overall[7].lost} </div>
              <div className='table1'>{standing.standings.overall[8].lost} </div>
              <div className='table1'>{standing.standings.overall[9].lost} </div>
            </div>
            <script type="text/javascript">
                let a=1;
            </script>
            <div className='points'>
              <div className='tag'>Points</div>
              <div className='table1'>{standing.standings.overall[0].points} </div>
              <div className='table1'>{standing.standings.overall[1].points} </div>
              <div className='table1'>{standing.standings.overall[2].points} </div>
              <div className='table1'>{standing.standings.overall[3].points} </div>
              <div className='table1'>{standing.standings.overall[4].points} </div>
              <div className='table1'>{standing.standings.overall[5].points} </div>
              <div className='table1'>{standing.standings.overall[6].points} </div>
              <div className='table1'>{standing.standings.overall[7].points} </div>
              <div className='table1'>{standing.standings.overall[8].points} </div>
              <div className='table1'>{standing.standings.overall[9].points} </div>
            </div>
        </div>
        </div>
    );
}

const Nba_standingsList =({standings})=>{
    if(standings===null){
      return <div>Loading ...</div>
    }
    if(standings.length===0){
      return <div>No leaderboard</div>
    }
    return(
      <div>
        {
          standings.map((standing)=>(
          <Nba_standing standing={standing} />
          ))
        }
      </div>
    )
  }

function Nba_standings() {
    const searchRef =useRef();
    const [standing, setStanding]=useState(null);

  useEffect(()=>{
    loadNBAStandings().then((standing)=> setStanding(standing))
  });

  return (
    <Nba_standingsList standings={standing}/>
  )
}

export default Nba_standings;