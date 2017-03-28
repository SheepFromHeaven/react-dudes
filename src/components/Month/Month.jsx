import React, { Component } from 'react';
import FilledDay from '../../containers/FilledDay';
import './Month.css';

class Month extends Component {
    render() {
        let days = [];
        this.props.days.forEach((day)=> {
            days.push(<FilledDay key={day.id} id={day.id}/>);
        });

        return (
            <div className="month">
                <h2 className="month__head">{this.props.month.name}</h2>
                {days}
            </div>
        );
    }
}

export default Month;