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
                <Statistics statisticNumber={this.props.strikesPerMinute} statisticName="Strikes Landed Per Minute" />
                <Statistics statisticNumber={this.props.strikeDifferential} statisticName="Strike Differential" />
                <Statistics statisticNumber={this.props.knockdownsLanded} statisticName="Knockdowns Landed" />
                <Statistics statisticNumber={this.props.submissions} statisticName="Submission Attempts" />
            </div>
        )
    }
}

export default Body