import React, { Component } from 'react';
import Month from '../Month/Month';
import './Year.css';

class Year extends Component {
    render() {
        let months = [
            <Month key="201701" name="Januar" yearId="2017" />,
            <Month key="201702" name="Februar" yearId="2017" />,
            <Month key="201703" name="März" yearId="2017" />
        ];

        return (
            <div className="year">
                {months}
            </div>
        );
    }
}

export default Year;