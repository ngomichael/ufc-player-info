import React, {Component} from 'react';
import Statistics from './Statistics';
import ScrollableAnchor from 'react-scrollable-anchor'

const statisticContainer = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '60%',
};


class Body extends Component {
    render() {
        return (
            <div>
                <ScrollableAnchor id="statistics">
                    <div style={statisticContainer}>
                        <Statistics statisticNumber={this.props.strikesPerMinute} statisticName="Strikes Landed Per Minute" />
                        <Statistics statisticNumber={this.props.strikeDifferential} statisticName="Strike Differential" />
                        <Statistics statisticNumber={this.props.knockdownsLanded} statisticName="Knockdowns Landed" />
                        <Statistics statisticNumber={this.props.submissionAttempts} statisticName="Submission Attempts" />
                        <Statistics statisticNumber={this.props.submissions} statisticName="Submissions" />
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default Body