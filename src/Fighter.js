//Creates the list of fighters in the FrontPage component
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "./constants";

//returns rankingsList styles and allows letterSpacing to change
//on mouseover and mouseout
function hoverFighter(spacing) {
  const rankingsList = {
    fontSize: "30px",
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
      letterSpacing: 3
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
        <Link to={ROUTES.fighterInfo} replace>
          <li
            onClick={this.props.onClick}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            style={hoverFighter(this.state.letterSpacing)}
          >
            {this.props.firstName} {this.props.lastName}
          </li>
        </Link>
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
