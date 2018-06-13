//Displays the first page that the user sees
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import FighterInfo from "./FighterInfo";
import Fighter from "./Fighter";
import ScrollableAnchor from "react-scrollable-anchor";
import { fighter } from "./FrontPage/reducer";
import { changeFighter } from "./FrontPage/actions";

const fighterData = {
  Demetrious: {
    firstName: "Demetrious",
    lastName: "Johnson",
    country: "United States",
    record: "16-2-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Conor: {
    firstName: "Conor",
    lastName: "McGregor",
    country: "Ireland",
    record: "9-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Stipe: {
    firstName: "Stipe",
    lastName: "Miocic",
    country: "United States",
    record: "11-2",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Max: {
    firstName: "Max",
    lastName: "Holloway",
    country: "United States",
    record: "14-3",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Daniel: {
    firstName: "Daniel",
    lastName: "Cormier",
    country: "United States",
    record: "12-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Cody: {
    firstName: "Cody",
    lastName: "Garbrandt",
    country: "United States",
    record: "6-0",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Joanna: {
    firstName: "Joanna",
    lastName: "Jedrzejczyk",
    country: "Poland",
    record: "8-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Tyron: {
    firstName: "Tyron",
    lastName: "Woodley",
    country: "United States",
    record: "8-0",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Jose: {
    firstName: "Jose",
    lastName: "Aldo",
    country: "Brazil",
    record: "8-2",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Dominick: {
    firstName: "Dominick",
    lastName: "Cruz",
    country: "United States",
    record: "8-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  }
};

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
    // this.props.changeFighter(fighterData.fighterName)
    // this.props.changeFighter(fighterData.Cody);
    // this.changeFighter = this.changeFighter.bind(this);
    this.state = {
      width: "0",
      opacity: "0"

      // fighterInfo: {
      //   headerOpacity: "1",
      //   firstName: "First",
      //   lastName: "Last",
      //   country: "Country",
      //   record: "0-0",

      //   strikesLandedPerMinute: 0,
      //   strikeDifferential: 0,
      //   knockdownsLanded: 0,
      //   submissionAttempts: 0,
      //   submissions: 0,
      //   totalStrikesLanded: 0
      // }
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
    //Logs fighter state
    console.log(this.props.fighter);
    // console.log(this.props.fighter.firstName);
    return (
      <div>
        <div style={frontPageStyles}>
          <ScrollableAnchor id="header">
            <div style={titleStyles}>Pick a Fighter</div>
          </ScrollableAnchor>
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
        <div>
          <FighterInfo fighterInfo={this.props.fighter} />
        </div>
      </div>
    );
  }
}
//Transforms the current Redux store state into the props you want to pass to presentational component
const mapStateToProps = state => {
  return {
    fighter: state.fighter
  };
};
//Connects FrontPage to the Redux store
export default connect(
  mapStateToProps,
  { changeFighter }
)(FrontPage);
