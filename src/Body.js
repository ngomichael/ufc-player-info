import React, {Component} from 'react';
import Statistics from './Statistics';

const statisticContainer = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '65%',
};


class Body extends Component {
    render() {
        return (
            <div style={statisticContainer}>
                <Statistics statisticNumber="55" statisticName="Total Strikes Landed" />
                <Statistics statisticNumber="5" statisticName="Punches Landed Per Minute" />
                <Statistics statisticNumber="15" statisticName="Strike Differential" />
                <Statistics statisticNumber="25" statisticName="Knockdowns Landed" />
                <Statistics statisticNumber="55" statisticName="Takedowns Landed" />
                <Statistics statisticNumber="100" statisticName="Submission Attempts" />
            </div>
        )
    }
}

export default Body