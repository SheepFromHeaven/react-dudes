import React, { Component } from 'react';
import './Day.css';

class Day extends Component {

    getWeekday(day) {
        let weekdays = {
            0: 'Mo',
            1: 'Di',
            2: 'Mi',
            3: 'Do',
            4: 'Fr',
            5: 'Sa',
            6: 'So'
        };

        return weekdays[day];
    }

    render() {

        return (
            <div className={'day day--' + this.props.day.dayInWeek}>
                <span className="day__dayInMonth">{this.props.day.dayInMonth}</span>
                <span className="day__weekday">{this.getWeekday(this.props.day.dayInWeek)}</span>
                {this.props.day.dayInWeek === 0 && <span className="day__calendarWeek">KW{this.props.day.calendarWeek}</span>}
            </div>
        );
    }
}

export default Day;