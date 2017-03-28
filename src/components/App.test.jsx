import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { combineReducers } from 'redux';

let initState = {
	days: [
		{
			id: 0,
			dayInWeek: 0,
			dayInMonth: 1,
			holidayName: "Nikolaus",
			monthId: 0
		}
	],
	months: [
		{
			id: 0,
			name: "January",
			yearId: 0
		}
	],
	years: [
		{
			id: 0,
			name: "2017"
		}
	]
};

let store = createStore(combineReducers({}), initState);

describe('App', () => {
	it('renders without crashing', () => {
    	const div = document.createElement('div');
		ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	});
});
