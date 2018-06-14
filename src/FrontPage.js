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

function frontPageStyles(flexDirection) {
  const frontPage = {
    display: "flex",
    alignItems: "center",
    flexDirection: flexDirection
  };
  return frontPage;
}

const titleStyles = {
  letterSpacing: "25px",
  flexDirection: "column",
  fontFamily: "Roboto Slab",
  fontWeight: "700"
};

function rankingsAndUnderlineContainerStyles(top) {
  const rankingsAndUnderlineContainer = {
    position: "relative",
    top: top + "px"
  };

  return rankingsAndUnderlineContainer;
}

//animates 'Pound for Pound" title
function animateRankingsTitle(opacity, fontSize) {
  const rankingsTitle = {
    position: "relative",
    letterSpacing: "5px",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: fontSize + "px",
    transition: "all 1.5s ease",
    opacity: opacity
  };

  return rankingsTitle;
}

//animates underline under 'Pound for Pound' title
function animateUnderline(width) {
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

////////////////////////////////////////////////////////////////

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
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={666}>
          <div style={frontPageStyles("column")}>
            <div style={{ paddingTop: "50px", ...titleStyles }}>
              <p>Pick a</p>
              <p>Fighter</p>
            </div>
            <div style={rankingsAndUnderlineContainerStyles(50)}>
              <div style={animateRankingsTitle(this.state.opacity, 20)}>
                Pound for Pound
              </div>
              <div style={animateUnderline(this.state.width)} />
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

        <MediaQuery minDeviceWidth={667} maxDeviceWidth={1023}>
          <div style={frontPageStyles("row")}>
            <div
              style={{
                width: "1em",
                paddingLeft: "100px",
                fontSize: "350%",
                ...titleStyles
              }}
            >
              Pick a Fighter
            </div>
            <div
              style={{
                left: "45%",
                ...rankingsAndUnderlineContainerStyles(100)
              }}
            >
              <div style={animateRankingsTitle(this.state.opacity, 30)}>
                Pound for Pound
              </div>
              <div style={animateUnderline(this.state.width)} />
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

        <MediaQuery minDeviceWidth={1024}>
          <div style={frontPageStyles("row")}>
            <div
              style={{
                width: "1em",
                paddingLeft: "100px",
                fontSize: "700%",
                ...titleStyles
              }}
            >
              Pick a Fighter
            </div>
            <div
              style={{
                left: "50%",
                ...rankingsAndUnderlineContainerStyles(100)
              }}
            >
              <div style={animateRankingsTitle(this.state.opacity, 40)}>
                Pound for Pound
              </div>
              <div style={animateUnderline(this.state.width)} />
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
