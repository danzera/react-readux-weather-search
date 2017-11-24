import { combineReducers } from 'redux';
import weatherReducer from './weather';

const rootReducer = combineReducers({
	weatherData: weatherReducer
});

export default rootReducer;
