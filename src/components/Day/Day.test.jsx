// tests Day.jsx Component

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day from './Day';

describe('Day', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Day />, div);
    });

    test('contains its needed DOM classes', () => {
        // Render a checkbox with label in the document
        const day = shallow(
            <Day dayInMonth="" weekday="" calendarWeek="" />
        );

        // check if all elements are present one time
        expect(day.find('.day')).toBe(1);
        expect(day.find('.day__dayInMonth')).toBe(1);
        expect(day.find('.day__weekday')).toBe(1);
        expect(day.find('.day__calendarWeek')).toBe(1);
    });

    test('contains the correct texts', () => {
        // Render a checkbox with label in the document
        const day = shallow(
            <Day dayInMonth="1" weekday="Mo" calendarWeek="1" />
        );

        // check if all elements are present one time
        expect(day.text()).toEqual('1Mo1');

    });

});



