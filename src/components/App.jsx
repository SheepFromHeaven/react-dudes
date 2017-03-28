import React, { Component } from 'react';
import Year from './Year/Year';
import './App.css';

class App extends Component {
    render() {
        let years = [
            <Year key="2017" name="2017" />,
            <Year key="2018" name="2018" />,
            <Year key="2019" name="2019" />
        ];

        return (
            <div className="calendar">
                {years}
            </div>
        );
    }
}

export default App;
