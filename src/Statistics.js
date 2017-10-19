import React, {Component} from 'react';
import CreateSkillsBar from './CreateSkillsBar';
import ScrollableAnchor from 'react-scrollable-anchor'

const statisticContainer = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    //This makes
    left: '60%',
    bottom: '30%'
};


class Statistics extends Component {
    render() {
        return (
            <div style={statisticContainer}>
                <ScrollableAnchor id="statistics">
                    <div>
                        <CreateSkillsBar statisticNumber={this.props.strikesPerMinute} statisticName="Strikes Landed Per Minute" />
                        <CreateSkillsBar statisticNumber={this.props.strikeDifferential} statisticName="Strike Differential" />
                        <CreateSkillsBar statisticNumber={this.props.knockdownsLanded} statisticName="Knockdowns Landed" />
                        <CreateSkillsBar statisticNumber={this.props.submissionAttempts} statisticName="Submission Attempts" />
                        <CreateSkillsBar statisticNumber={this.props.submissions} statisticName="Submissions" />
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default Statistics