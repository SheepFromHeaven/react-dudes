import React, { Component } from 'react';
import Day from '../Day/Day';
import './Month.css';

class Month extends Component {
    render() {
        let days = [
            <Day key="20170101" dayInMonth="1" weekday="Mo" calendarWeek="KW1" holidayName="Neujahr" monthId="201701" />,
            <Day key="20170102" dayInMonth="2" weekday="Di" calendarWeek="KW1" holidayName="" monthId="201702"/>,
            <Day key="20170103" dayInMonth="3" weekday="Mi" calendarWeek="KW1" monthId="201703"/>,
            <Day key="20170104" dayInMonth="4" weekday="Do" calendarWeek="KW1" monthId="201704"/>,
            <Day key="20170105" dayInMonth="5" weekday="Fr" calendarWeek="KW1" monthId="201705"/>,
            <Day key="20170106" dayInMonth="6" weekday="Sa" calendarWeek="KW1" monthId="201706"/>,
            <Day key="20170107" dayInMonth="7" weekday="So" calendarWeek="KW1" monthId="201707"/>
        ];

        return (
            <div className="month">
                <h2 className="month__head">{this.props.name}</h2>
                {days}
            </div>
        );
    }
}

export default Month;