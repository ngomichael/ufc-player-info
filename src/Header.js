//Displays the country, fighter name, and record
import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

function animateFighterInfo1224(opacity) {
  const fighterInfoStyles = {
    display: "flex",
    // position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "1000px",
    // height: "110px",
    fontSize: "176%",
    // top: "450px",
    // right: "10px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return fighterInfoStyles;
}

const countryStyles1224 = {
  color: "darkblue",
  // position: "relative",
  fontSize: "40px",
  fontFamily: "Open Sans",
  fontWeight: "600"
  // top: "5px"
};

const fighterNameStyles1224 = {
  display: "flex",
  // position: "relative",
  // alignItems: "center",
  // justifyContent: "center",
  color: "black",
  fontSize: "80px",
  fontFamily: "Lato",
  fontWeight: "700"
  // right: "35px"
};

const recordStyles1224 = {
  // position: "relative",
  fontSize: "40px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  // bottom: "5px",
  color: "#b30000"
  // top: "5px"
};

////////////////////////////////////////////////////////////////

function animateFighterInfo320(opacity) {
  const fighterInfoStyles = {
    display: "flex",
    flexDirection: "column",
    // position: "relative",
    justifyContent: "center",
    alignItems: "center",
    // width: "200%",
    // height: "110px",
    // fontSize: "176%",
    // top: "450px"
    // right: "10px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return fighterInfoStyles;
}

const fighterNameStyles320 = {
  display: "flex",
  // position: "relative",
  // alignItems: "center",
  // justifyContent: "center",
  color: "black",
  fontSize: "35px",
  fontFamily: "Lato",
  fontWeight: "400"
  // right: "35px"
};

const countryStyles320 = {
  color: "darkblue",
  // position: "relative",
  fontSize: "25px",
  fontFamily: "Open Sans",
  fontWeight: "600"
  // top: "5px"
};

const recordStyles320 = {
  // position: "relative",
  fontSize: "25px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  // bottom: "5px",
  color: "#b30000"
  // top: "5px"
};

///////////////////////////////////////////////////////////////////////////

function animateFighterInfo667(opacity) {
  const fighterInfoStyles = {
    display: "flex",
    // position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "800px",
    // height: "110px",
    fontSize: "176%",
    // top: "450px",
    // right: "10px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return fighterInfoStyles;
}

const countryStyles667 = {
  color: "darkblue",
  // position: "relative",
  fontSize: "30px",
  fontFamily: "Open Sans",
  fontWeight: "600"
  // top: "5px"
};

const fighterNameStyles667 = {
  display: "flex",
  // position: "relative",
  // alignItems: "center",
  // justifyContent: "center",
  color: "black",
  fontSize: "70px",
  fontFamily: "Lato",
  fontWeight: "700"
  // right: "35px"
};

const recordStyles667 = {
  // position: "relative",
  fontSize: "30px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  // bottom: "5px",
  color: "#b30000"
  // top: "5px"
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ opacity: this.props.opacity });
      }.bind(this),
      1000
    );
  }

  render() {
    return (
      <div
        style={{ display: "flex", paddingBottom: "30px", paddingTop: "20px" }}
      >
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={666}>
          <div style={animateFighterInfo320(this.state.opacity)}>
            <div style={countryStyles320}>{this.props.country}</div>
            <div style={fighterNameStyles320}>
              <div>{this.props.firstName}</div>
              <i>{this.props.lastName}</i>
            </div>
            <div style={recordStyles320}>{this.props.record}</div>
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={667} maxDeviceWidth={1223}>
          <div
            style={{
              // marginRight: "10%",
              ...animateFighterInfo667(this.state.opacity)
            }}
          >
            <div style={countryStyles667}>{this.props.country}</div>
            <div style={fighterNameStyles667}>
              {this.props.firstName} <i>{this.props.lastName}</i>
            </div>
            <div style={recordStyles667}>{this.props.record}</div>
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={1224}>
          <div
            style={{
              marginRight: "10%",
              ...animateFighterInfo1224(this.state.opacity)
            }}
          >
            <div style={countryStyles1224}>{this.props.country}</div>
            <div style={fighterNameStyles1224}>
              {this.props.firstName} <i>{this.props.lastName}</i>
            </div>
            <div style={recordStyles1224}>{this.props.record}</div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

Header.propTypes = {
  opacity: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  record: PropTypes.string.isRequired
};

export default Header;

//ComponentDidMount only mounts once so use this to check if the current prop and nextProp are different
//If they are different then it calls setState and changes the value of opacity
// componentWillReceiveProps(nextProps) {
//   if (this.props.firstName !== nextProps.firstName) {
//     setTimeout(
//       function() {
//         this.setState({ opacity: nextProps.opacity });
//       }.bind(this),
//       1000
//     );
//   }
// }
