import { combineReducers } from 'redux'
import vacations from './vacations'

let days = (state = [], action) => {
	return state;
};

let months = (state = [], action) => {
	return state;
};

let years = (state = [], action) => {
	return state;
};

const calendarApp = combineReducers({
	days,
	months,
	years,
	vacations
});

export default calendarApp