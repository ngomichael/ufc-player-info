//Displays skills bars
import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsBar from "./SkillsBar";
import MediaQuery from "react-responsive";

const statisticContainer = {
  // display: "flex"
};

// const leftStatisticStyles = {
//   position: "relative",
//   right: "725px"
// };

// const rightStatisticStyles = {
//   position: "relative",
//   top: "460px",
//   right: "55px"
// };

class Statistics extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={320}>
          <div style={statisticContainer}>
            <div>
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
        </MediaQuery>

        {/* <MediaQuery minDeviceWidth={320}>
          <div style={statisticContainer}>
            <div>
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

            <div>
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
        </MediaQuery> */}
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
