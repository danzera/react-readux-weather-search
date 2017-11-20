export function weatherSearch(city) {
	return {
		type: 'WEATHER_SEARCH',
		payload: city
	};
}