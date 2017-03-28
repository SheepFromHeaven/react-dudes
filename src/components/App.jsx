import React, { Component } from 'react';
import Day from './Day/Day';
import './App.css';

class App extends Component {
  render() {
      let days = [
          <Day dayInMonth="1" weekday="Mo" calendarWeek="KW1" />,
          <Day dayInMonth="2" weekday="Di" calendarWeek="KW1" />,
          <Day dayInMonth="3" weekday="Mi" calendarWeek="KW1" />,
          <Day dayInMonth="4" weekday="Do" calendarWeek="KW1" />,
          <Day dayInMonth="5" weekday="Fr" calendarWeek="KW1" />,
          <Day dayInMonth="6" weekday="Sa" calendarWeek="KW1" />,
          <Day dayInMonth="7" weekday="So" calendarWeek="KW1" />
      ];

    return (
        <div class="calendar">
            <div class="calendar__year">
                <div class="calendar__month">
                    {days}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
