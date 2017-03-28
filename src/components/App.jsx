import React, { Component } from 'react';
import SelectedYear from '../containers/SelectedYear';
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="calendar">
                <SelectedYear key="2017" id={0} />
            </div>
        );
    }
}

export default App;
