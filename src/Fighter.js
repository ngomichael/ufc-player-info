//Creates the list of fighters in the FrontPage component
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "./constants";
import MediaQuery from "react-responsive";

//returns rankingsList styles and allows letterSpacing to change
//on mouseover and mouseout
function hoverFighter(spacing, fontSize) {
  const rankingsList = {
    fontSize: fontSize + "px",
    cursor: "pointer",
    fontFamily: "Open Sans",
    fontWeight: "400",
    letterSpacing: spacing,
    margin: "15px 0",
    transition: "all 0.3s ease"
  };
  return rankingsList;
}

class Fighter extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      letterSpacing: 0
    };
  }

  onMouseOver() {
    this.setState({
      letterSpacing: 2
    });
  }

  onMouseOut() {
    this.setState({
      letterSpacing: 0
    });
  }

  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={666}>
          <Link
            to={ROUTES.fighterInfo}
            style={{ textDecoration: "none", color: "black" }}
            replace
          >
            <li
              onClick={this.props.onClick}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              style={hoverFighter(this.state.letterSpacing, 20)}
            >
              {this.props.firstName} {this.props.lastName}
            </li>
          </Link>
        </MediaQuery>
        <MediaQuery minDeviceWidth={667} maxDeviceWidth={1023}>
          <Link
            to={ROUTES.fighterInfo}
            style={{ textDecoration: "none", color: "black" }}
            replace
          >
            <li
              onClick={this.props.onClick}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              style={hoverFighter(this.state.letterSpacing, 23)}
            >
              {this.props.firstName} {this.props.lastName}
            </li>
          </Link>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <Link
            to={ROUTES.fighterInfo}
            style={{ textDecoration: "none", color: "black" }}
            replace
          >
            <li
              onClick={this.props.onClick}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              style={hoverFighter(this.state.letterSpacing, 30)}
            >
              {this.props.firstName} {this.props.lastName}
            </li>
          </Link>
        </MediaQuery>
      </div>
    );
  }
}

Fighter.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Fighter;
