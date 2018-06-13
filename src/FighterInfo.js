//Onclick call dispatch with the fighters name you clicked on
//Move actionTypes, action, reducer inside folder called FrontPage

//Displays the arrow, country, fighter name, record, and skills bars
import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Statistics from "./Statistics";

// const fighterChangeStyle = {
//   position: "relative",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   ontFamily: "Lato",
//   fontWeight: "700",
//   color: "#006600",
//   cursor: "pointer",
//   textDecoration: "none"
// };

class FighterInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header
            firstName={this.props.fighterInfo.firstName}
            lastName={this.props.fighterInfo.lastName}
            country={this.props.fighterInfo.country}
            record={this.props.fighterInfo.record}
            opacity={this.props.fighterInfo.headerOpacity}
          />
        </div>

        <div>
          <Statistics
            strikesLandedPerMinute={
              this.props.fighterInfo.strikesLandedPerMinute
            }
            strikeDifferential={this.props.fighterInfo.strikeDifferential}
            knockdownsLanded={this.props.fighterInfo.knockdownsLanded}
            submissionAttempts={this.props.fighterInfo.submissionAttempts}
            submissions={this.props.fighterInfo.submissions}
            totalStrikesLanded={this.props.fighterInfo.totalStrikesLanded}
          />
        </div>
      </div>
    );
  }
}

FighterInfo.propTypes = {
  fighterInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    record: PropTypes.string.isRequired,
    headerOpacity: PropTypes.string.isRequired,
    strikesLandedPerMinute: PropTypes.number.isRequired,
    strikeDifferential: PropTypes.number.isRequired,
    knockdownsLanded: PropTypes.number.isRequired,
    submissionAttempts: PropTypes.number.isRequired,
    submissions: PropTypes.number.isRequired,
    totalStrikesLanded: PropTypes.number.isRequired
  }).isRequired
};

export default FighterInfo;
