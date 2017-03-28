import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
    render() {

        return (
            <div className={'day day--' + this.props.day.weekday}>
                <span className="day__dayInMonth">{this.props.day.dayInMonth}</span>
                <span className="day__weekday">{this.props.day.weekday}</span>
                <span className="day__calendarWeek">{this.props.day.calendarWeek}</span>
            </div>
        );
    }
}

export default Day;