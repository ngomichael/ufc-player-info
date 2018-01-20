//Displays skills bars
import React, {Component} from 'react';
import PropTypes from "prop-types";
import CreateSkillsBar from './CreateSkillsBar';
import ScrollableAnchor from 'react-scrollable-anchor'

const statisticContainer = {
    position: 'relative',
    //This is what makes the width of the page a lot larger
    left: '900px',
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
                    <CreateSkillsBar statisticNumber={this.props.strikesLandedPerMinute} statisticName="Strikes Landed Per Minute" />
                    <CreateSkillsBar statisticNumber={this.props.strikeDifferential} statisticName="Strike Differential" />
                    <CreateSkillsBar statisticNumber={this.props.knockdownsLanded} statisticName="Knockdowns Landed" />
                </div>
            </div>
        )
    }
}

Statistics.propTypes = {
    strikesLandedPerMinute: PropTypes.number.isRequired,
    strikeDifferential: PropTypes.number.isRequired,
    knockdownsLanded: PropTypes.number.isRequired,
    submissionAttempts: PropTypes.number.isRequired,
    submissions: PropTypes.number.isRequired,
    totalStrikesLanded: PropTypes.number.isRequired
}

export default Statistics