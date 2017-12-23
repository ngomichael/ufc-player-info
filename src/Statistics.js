//Displays skills bars
import React, {Component} from 'react';
import CreateSkillsBar from './CreateSkillsBar';
import ScrollableAnchor from 'react-scrollable-anchor'

const statisticContainer = {
    position: 'relative',
    //This is what makes the width of the page a lot larger
    left: '900px'
};

const leftStatisticStyles = {
    position: 'relative',
    right: '725px',
};

const rightStatisticStyles = {
    position: 'relative',
    top: '460px',
    right: '55px'
};

class Statistics extends Component {
    render() {
        return (
            <div style={statisticContainer}>
                <ScrollableAnchor id="statistics">
                    <div style={rightStatisticStyles}>
                        <CreateSkillsBar statisticNumber={this.props.submissionAttempts} statisticName="Submission Attempts" />
                        <CreateSkillsBar statisticNumber={this.props.submissions} statisticName="Submissions" />
                        <CreateSkillsBar statisticNumber={this.props.totalStrikesLanded} statisticName="Total Strikes Landed" />
                    </div>
                </ScrollableAnchor>

                <div style={leftStatisticStyles}>
                    <CreateSkillsBar statisticNumber={this.props.strikesPerMinute} statisticName="Strikes Landed Per Minute" />
                    <CreateSkillsBar statisticNumber={this.props.strikeDifferential} statisticName="Strike Differential" />
                    <CreateSkillsBar statisticNumber={this.props.knockdownsLanded} statisticName="Knockdowns Landed" />
                </div>
            </div>
        )
    }
}

export default Statistics