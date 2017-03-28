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
        let vacations = [];

        this.props.vacations.forEach((color)=> {
            const style = {
                backgroundColor: color
            };
            vacations.push(<span className="day__vacation" style={style}></span>);
        });

        let isHoliday = this.props.day.holidayName ? ' day--holiday' : '';

        return (
            <div className={'day day--' + this.props.day.dayInWeek + isHoliday}>
                <span className="day__dayInMonth">{this.props.day.dayInMonth}</span>
                <span className="day__weekday">{this.getWeekday(this.props.day.dayInWeek)}</span>
                {this.props.day.holidayName && <span className="day__holiday">{this.props.day.holidayName}</span>}
                <div className="day__vacations">
                    {vacations}
                </div>
                {this.props.day.dayInWeek === 0 && <span className="day__calendarWeek">KW{this.props.day.calendarWeek}</span>}
            </div>
        );
    }
}

export default Day;