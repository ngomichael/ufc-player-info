//Displays skills bars
import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsBar from "./SkillsBar";
import ScrollableAnchor from "react-scrollable-anchor";

const statisticContainer = {
  position: "relative",
  //This is what makes the width of the page a lot larger
  left: "900px"
};

const leftStatisticStyles = {
  position: "relative",
  right: "725px"
};

const rightStatisticStyles = {
  position: "relative",
  top: "460px",
  right: "55px"
};

class Statistics extends Component {
  render() {
    return (
      <div style={statisticContainer}>
        <ScrollableAnchor id="statistics">
          <div style={rightStatisticStyles}>
            <SkillsBar
              statisticNumber={this.props.submissionAttempts}
              statisticName="Submission Attempts"
            />
            <SkillsBar
              statisticNumber={this.props.submissions}
              statisticName="Submissions"
            />
            <SkillsBar
              statisticNumber={this.props.totalStrikesLanded}
              statisticName="Total Strikes Landed"
            />
          </div>
        </ScrollableAnchor>

        <div style={leftStatisticStyles}>
          <SkillsBar
            statisticNumber={this.props.strikesLandedPerMinute}
            statisticName="Strikes Landed Per Minute"
          />
          <SkillsBar
            statisticNumber={this.props.strikeDifferential}
            statisticName="Strike Differential"
          />
          <SkillsBar
            statisticNumber={this.props.knockdownsLanded}
            statisticName="Knockdowns Landed"
          />
        </div>
      </div>
    );
  }
}

Statistics.propTypes = {
  strikesLandedPerMinute: PropTypes.number.isRequired,
  strikeDifferential: PropTypes.number.isRequired,
  knockdownsLanded: PropTypes.number.isRequired,
  submissionAttempts: PropTypes.number.isRequired,
  submissions: PropTypes.number.isRequired,
  totalStrikesLanded: PropTypes.number.isRequired
};

export default Statistics;
