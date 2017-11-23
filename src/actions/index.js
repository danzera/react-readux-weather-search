// axios is an http client for making AJAX requests
// https://github.com/axios/axios
import axios from 'axios';
const API_KEY = 'c844d2ab8676e10f2d45e46f217266cd';
// root url for our weather API search
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// exporting our action type as a variable helps keep our action types consistent
// introduces the possibility for uncaught action type mismatches between action creators and reducers
// when we directly define the action type as a string in both the action creator and the reducer
// this way we can import the action type variable into our reducer and know that it is referencing the same string as our action creator
export const FETCH_WEATHER = 'FETCH_WEATHER';
/**
 * action creator - contains API request for weather info
 * @param {string} city - name of the city to make API request for
 * @returns {Object} - action
 * @returns	{Object.type} - FETCH_WEATHER
 * @returns {Object.payload} - Promise (API request)
 */
export function fetchWeather(city) {
	// forming the url for our API request using the base url and 
	// NOTE: "us" at the end of the query string is the country code, just making it static for this application
	// -- would need another variable if we wanted to be able to search for weather in other countries
	const url = `${ROOT_URL}&q=${city},us`;
	// make request to the openweathermap API
	// axios.get() returns a promise
	const request = axios.get(url);

	// action to be sent from our action creator to our reducers
	return {
		// again, factoring out our action type to a variable to keep it consistent between our action creators and reducers
		type: FETCH_WEATHER,
		// pass the Promise for the API request as the payload of our action
		payload: request
	};
}