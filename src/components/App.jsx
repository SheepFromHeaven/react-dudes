import React, { Component } from 'react';
import Day from './Day/Day';
import './App.css';

class App extends Component {
  render() {
      let days = [
          <Day key="1" dayInMonth="1" weekday="Mo" calendarWeek="KW1" />,
          <Day key="2" dayInMonth="2" weekday="Di" calendarWeek="KW1" />,
          <Day key="3" dayInMonth="3" weekday="Mi" calendarWeek="KW1" />,
          <Day key="4" dayInMonth="4" weekday="Do" calendarWeek="KW1" />,
          <Day key="5" dayInMonth="5" weekday="Fr" calendarWeek="KW1" />,
          <Day key="6" dayInMonth="6" weekday="Sa" calendarWeek="KW1" />,
          <Day key="7" dayInMonth="7" weekday="So" calendarWeek="KW1" />
      ];

    return (
        <div className="calendar">
            <div className="calendar__year">
                <div className="calendar__month">
                    {days}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
