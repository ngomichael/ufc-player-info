//Onclick call dispatch with the fighters name you clicked on
//Move actionTypes, action, reducer inside folder called FrontPage

//Displays the arrow, country, fighter name, record, and skills bars
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import Header from "./Header";
import Statistics from "./Statistics";
import faStyles from "font-awesome/css/font-awesome.css";

const fighterChangeStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ontFamily: "Lato",
  fontWeight: "700",
  color: "#006600",
  cursor: "pointer",
  textDecoration: "none",
  top: "190px"
};

const arrowStyle = {
  color: "black"
};

class FighterInfo extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      cursor: "pointer"
    };
  }

  onMouseOver() {
    this.setState({
      cursor: "pointer"
    });
  }

  onMouseOut() {
    this.setState({
      cursor: ""
    });
  }

  render() {
    //   const { firstName, lastName, country } = this.props.fighterInfo;
    console.log(this.props.fighter);

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
        <a
          href="#header"
          style={fighterChangeStyle}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <div style={arrowStyle}>
            <FontAwesome
              className="fa fa-long-arrow-up fa-4x"
              name="upArrow"
              cssModule={faStyles}
            />
          </div>
        </a>

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
