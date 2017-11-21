export function weatherSearch(city) {
	const API_KEY = 'c844d2ab8676e10f2d45e46f217266cd';
	
	return {
		type: 'WEATHER_SEARCH',
		payload: city
	};
}