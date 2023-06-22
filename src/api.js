//This is from rapidapi.com to get an api from the nba
//and get the json

const url3 = 'https://basketball-data.p.rapidapi.com/tournament/standings?tournamentId=89';
const url2 ="https://basketball-data.p.rapidapi.com/tournament/leaderboard/rebound";
const url1="https://basketball-data.p.rapidapi.com/tournament/leaderboard/point";
const url = 'https://basketball-data.p.rapidapi.com/match/list/results?date=29%2F01%2F2021';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1d6e7f5cfmshb7a50f3b49a74a4p13d625jsn4c441dc7f20f',
		'X-RapidAPI-Host': 'basketball-data.p.rapidapi.com'
	}
};

export const loadNBA = async () => {
    const response = await fetch(url, options);
    const nba = await response.json();
    return nba;
}

export const loadNBALeaderboard =async () => {
    const response = await fetch(url1, options);
    const nba = await response.json();
    return nba;
}

export const loadNBARebound =async () => {
    const response = await fetch(url2, options);
    const nba = await response.json();
    return nba;
}

export const loadNBAStandings =async () => {
    const response = await fetch(url3, options);
    const nba = await response.json();
    return nba;
}



//  try {
//  	const response = await fetch(url1, options);
//  	const result = await response.text();
//  	console.log(result);
//  } catch (error) {
//  	console.error(error);
//  }