//Displays the first page that the user sees
import React, { Component } from "react";
import Fighter from "./Fighter";
import { fighterData } from "./constants";
import MediaQuery from "react-responsive";

//Function passed to Fighter component to change this component's states
//when a fighter is clicked
// changeFighter(id) {
//   const fighter = fighterData[id];
//   this.setState({
//     fighterInfo: fighter
//   });
// }

const frontPageStyles1024 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row"
};

const titleStyles1024 = {
  width: "1em",
  letterSpacing: "25px",
  flexDirection: "column",
  fontFamily: "Roboto Slab",
  fontWeight: "700",
  fontSize: "700%",
  paddingLeft: "100px"
};

const rankingsAndUnderlineContainer1024 = {
  position: "relative",
  left: "50%",
  top: "100px"
};

//animates 'Pound for Pound" title
function animateRankingsTitle1024(opacity) {
  const rankingsTitle = {
    position: "relative",
    letterSpacing: "5px",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: "40px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return rankingsTitle;
}

//animates underline under 'Pound for Pound' title
function animateUnderline1024(width) {
  const underline = {
    position: "relative",
    width: width + "%",
    backgroundColor: "black",
    height: "4px",
    borderRadius: "4px",
    transition: "all 1.5s ease"
  };

  return underline;
}
///////////////////////////////////////////////////////////////////////////////////////////////
const frontPageStyles320 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
};

const titleStyles320 = {
  // width: "1em",
  letterSpacing: "25px",
  flexDirection: "column",
  fontFamily: "Roboto Slab",
  fontWeight: "700",
  // fontSize: "700%",
  paddingTop: "50px"
};

const rankingsAndUnderlineContainer320 = {
  position: "relative",
  // left: "50%",
  top: "50px"
};

//animates 'Pound for Pound" title
function animateRankingsTitle320(opacity) {
  const rankingsTitle = {
    position: "relative",
    letterSpacing: "5px",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: "20px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return rankingsTitle;
}

//animates underline under 'Pound for Pound' title
function animateUnderline320(width) {
  const underline = {
    position: "relative",
    width: width + "%",
    backgroundColor: "black",
    height: "4px",
    borderRadius: "4px",
    transition: "all 1.5s ease"
  };

  return underline;
}

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "0",
      opacity: "0"
    };
  }

  //Changes the opacity of 'Pound for Pound' title and width of underline under
  //'Pound for Pound' title after component mounts
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ width: 100 });
      }.bind(this),
      1
    );
    setTimeout(
      function() {
        this.setState({ opacity: 1 });
      }.bind(this),
      1
    );
  }

  render() {
    return (
      <div>
        <MediaQuery maxDeviceWidth={1223}>
          <div style={frontPageStyles320}>
            <div style={titleStyles320}>
              <p>Pick a</p>
              <p>Fighter</p>
            </div>
            <div style={rankingsAndUnderlineContainer320}>
              <div style={animateRankingsTitle320(this.state.opacity)}>
                Pound for Pound
              </div>
              <div style={animateUnderline320(this.state.width)} />
              <ol>
                {Object.keys(fighterData).map(fighterName => (
                  <Fighter
                    key={fighterName}
                    firstName={fighterData[fighterName].firstName}
                    lastName={fighterData[fighterName].lastName}
                    //OnClick change state to fighter that I clicked on which affects the props that go to FighterInfo
                    onClick={() =>
                      this.props.changeFighter(fighterData[fighterName])
                    }
                  />
                ))}
              </ol>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1224}>
          <div style={frontPageStyles1024}>
            <div style={titleStyles1024}>Pick a Fighter</div>
            <div style={rankingsAndUnderlineContainer1024}>
              <div style={animateRankingsTitle1024(this.state.opacity)}>
                Pound for Pound
              </div>
              <div style={animateUnderline1024(this.state.width)} />
              <ol>
                {Object.keys(fighterData).map(fighterName => (
                  <Fighter
                    key={fighterName}
                    firstName={fighterData[fighterName].firstName}
                    lastName={fighterData[fighterName].lastName}
                    //OnClick change state to fighter that I clicked on which affects the props that go to FighterInfo
                    onClick={() =>
                      this.props.changeFighter(fighterData[fighterName])
                    }
                  />
                ))}
              </ol>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default FrontPage;
