//This is from rapidapi.com to get an api from the nba
//and get the json


const url = 'https://api-nba-v1.p.rapidapi.com/seasons';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1d6e7f5cfmshb7a50f3b49a74a4p13d625jsn4c441dc7f20f',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

export const loadNBA = async () => {
    const response = await fetch(url, options);
    const nba = await response.json();
    return nba;
}

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }