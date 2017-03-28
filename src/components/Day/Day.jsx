import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
    render() {

        return (
            <div className={'day day--' + this.props.weekday}>
                <span className="day__dayInMonth">{this.props.dayInMonth}</span>
                <span className="day__weekday">{this.props.weekday}</span>
                <span className="day__calendarWeek">{this.props.calendarWeek}</span>
            </div>
        );
    }
}

export default Day;