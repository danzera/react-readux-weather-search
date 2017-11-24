// importing our action.type variable from our action creator for use in the switch statement of our reducer
// need to wrap variable in curly braces since there are multiple exports from actions/index.js -- all are bundled in an object
import { FETCH_WEATHER } from '../actions';

/**
 * function for handling the FETCH_WEATHER action
 * @param {Object} state - current Redux state, undefined at app load so need to default to null in args to handle that case
 * @param {Object} action - received from action creators
 * @param {string} action.type - type of action received from the action creators, used to determine how our reducer should handle the action
 * @param {Object} action.payload - variable value, and possibly type, depend on the action received
 * @returns {Object} - 
 */
export default function(state = null, action) {
	console.log('action received', action);
	console.log('payload', action.payload);
	console.log('payload type', typeof action.payload);
	switch (action.type) {
		case FETCH_WEATHER:
			if (action.error) {
				console.log('error fetching weather', action.payload);
				alert('BAD SEARCH, please try again!');
				return state;
			} else {
				console.log('weather fetched', action.payload);
				return action.payload.data;
			}
		default:
			return state;
	}
}