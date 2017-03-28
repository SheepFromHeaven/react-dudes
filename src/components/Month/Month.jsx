import React, { Component } from 'react';
import FilledDay from '../../containers/FilledDay';
import './Month.css';

class Month extends Component {
    render() {
        let days = [
            <FilledDay id={0}/>
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