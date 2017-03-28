import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { combineReducers } from 'redux';
import mockState from '../mockState';
import calendarApp from '../reducers/index';

let store = createStore(calendarApp, mockState);

describe('App', () => {
	it('renders without crashing', () => {
    	const div = document.createElement('div');
		ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	});
});
