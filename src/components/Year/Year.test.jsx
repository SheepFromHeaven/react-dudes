// tests Year.jsx Component

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Year from './Year';

describe('Year', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Year months={[]}/>, div);
	});
});