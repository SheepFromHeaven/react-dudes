import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
    render() {

        return (
            <div className={'day day--' + this.props.weekday}>
                <span class="day__dayInMonth">{this.props.dayInMonth}</span>
                <span class="day__weekday">{this.props.weekday}</span>
                <span class="day__calendarWeek">{this.props.calendarWeek}</span>
            </div>
        );
    }
}

export default Day;