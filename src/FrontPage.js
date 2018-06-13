//Displays the first page that the user sees
import React, { Component } from "react";
import Fighter from "./Fighter";
import { fighterData } from "./constants";
import { store } from "./index";

const titleStyles = {
  width: "1em",
  letterSpacing: "25px",
  flexDirection: "column",
  fontFamily: "Roboto Slab",
  fontWeight: "700",
  fontSize: "700%",
  paddingLeft: "100px"
};

const frontPageStyles = {
  display: "flex",
  alignItems: "center"
};

const rankingsAndUnderlineContainer = {
  position: "relative",
  left: "50%",
  top: "100px"
};

//animates 'Pound for Pound" title
function animateRankingsTitle(opacity) {
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
class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "0",
      opacity: "0"
    };
  }

  //Function passed to Fighter component to change this component's states
  //when a fighter is clicked
  // changeFighter(id) {
  //   const fighter = fighterData[id];
  //   this.setState({
  //     fighterInfo: fighter
  //   });
  // }

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
    console.log(store.getState());
    return (
      <div>
        <div style={frontPageStyles}>
          <div style={titleStyles}>Pick a Fighter</div>
          <div style={rankingsAndUnderlineContainer}>
            <div style={animateRankingsTitle(this.state.opacity)}>
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
      </div>
    );
  }
}

export default FrontPage;
