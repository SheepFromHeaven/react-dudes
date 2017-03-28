import { combineReducers } from 'redux'
import days from './vacations'

const calendarApp = combineReducers({
	days
});

export default calendarApp