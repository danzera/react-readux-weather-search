// importing our action.type variable from our action creator for use in the switch statement of our reducer
// need to wrap variable in curly braces since there are multiple exports from actions/index.js -- all are bundled in an object
// better to use variables for aciton types lest a typo be made defining an action type with a string - this way is "less fragile"
import { FETCH_WEATHER } from '../actions';

/**
 * function for handling the FETCH_WEATHER action
 * @param {Object} state - current Redux state, undefined at app load so need to provife a default value in args to handle that case --> since our state will be a running list of cities' weather data, we can default state to an empty array as opposed to null
 * @param {Object} action - received from action creators
 * @param {string} action.type - type of action received from the action creators, used to determine how our reducer should handle the action
 * @param {Object} action.payload - value and variable type depend on the action received - will be the API response Object in the case of FETCH_WEATHER
 * @returns {Array} - either the original state array or a new array including the data returned from the API
 */
export default function(state = [], action) {
	console.log('action received', action);
	switch (action.type) {
		case FETCH_WEATHER:
			// check to see if redux-promise encountered an error with the API response
			if (action.error) {
				console.log('error fetching weather', action.payload);
				alert('BAD SEARCH! Please try again!');
				return state;
			// otherwise process API success response
			} else {
				console.log('weather fetched', action.payload);
				// NEVER MUTATE REDUX STATE -- ALWAYS RETURN NEW PIECE OF STATE
				// use the spread operator to CREATE/RETURN A NEW ARRAY
				// new city's data will be the first element of the new array and all current cities' data stored in state will be subsequently added to this new array
				// DO NOT! do something like state.push(action.payload.data) == BAD -- this would be an example of mutating state
				const newState = [action.payload.data, ...state];
				console.log('old state', state);
				console.log('new state', newState);
				return newState;
			}
		default:
			return state;
	}
}