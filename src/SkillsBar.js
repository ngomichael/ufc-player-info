//Creates the skills bar
import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

const container1024 = {
  display: "flex",
  flexDirection: "column"
  // position: "relative"
  // height: "100%"
};

const outerSkillsBar1024 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "450px",
  backgroundColor: "#e6e6e6",
  height: "60px",
  borderRadius: "3px",
  marginBottom: "15px"
  // borderBottomRightRadius: "3px",
  // borderTopRightRadius: "3px"
};

const statNumber1024 = {
  display: "flex",
  paddingRight: "6%",
  position: "relative",
  fontFamily: "Open Sans",
  fontWeight: "600"
};

const statisticName1024 = {
  // position: "relative",
  margin: "5px 0px",
  fontFamily: "Open Sans",
  fontWeight: "700",
  color: "#33331a"
};

// const spaceBetweenSkillBar1024 = {
//   height: "40px"
// };

//Returns styles that takes a number and uses that as its width
function createInnerSkillsStyle1024(width) {
  const innerSkillsStyle = {
    width: width + "%",
    backgroundColor: "#990000",
    opacity: "0.9",
    height: "60px",
    borderBottomLeftRadius: "4px",
    borderTopLeftRadius: "4px",
    borderRadius: "3px",
    transition: "all 1.5s ease"
  };

  return innerSkillsStyle;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
const container320 = {
  display: "flex",
  flexDirection: "column"
  // height: "100%"
};

const outerSkillsBar320 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // width: "110%",
  backgroundColor: "#e6e6e6",
  height: "40px",
  borderRadius: "3px",
  marginBottom: "15px"
  // borderBottomRightRadius: "3px",
  // borderTopRightRadius: "3px"
};

const statNumber320 = {
  display: "flex",
  marginRight: "6%",
  position: "relative",
  fontFamily: "Open Sans",
  fontWeight: "400"
};

const statisticName320 = {
  // position: "relative",
  margin: "5px 0px",
  fontFamily: "Open Sans",
  fontWeight: "700",
  color: "#33331a"
};

// const spaceBetweenSkillBar320 = {
//   height: "20px"
// };

//Returns styles that takes a number and uses that as its width
function createInnerSkillsStyle320(width) {
  const innerSkillsStyle = {
    width: width + "%",
    backgroundColor: "#990000",
    opacity: "0.9",
    height: "40px",
    // borderBottomLeftRadius: "4px",
    // borderTopLeftRadius: "4px",
    borderRadius: "2px",
    transition: "all 1.5s ease"
  };

  return innerSkillsStyle;
}

class SkillsBar extends Component {
  constructor(props) {
    super(props);
    this.callAddToCount = this.callAddToCount.bind(this);
    this.addToCount = this.addToCount.bind(this);
    this.state = {
      statNum: 0,
      //change name of count to something better description
      count: 0
    };
  }

  //adds 1 to the current value of the state count and takes in a number for setTimeout
  addToCount(milliseconds) {
    setTimeout(
      function() {
        this.setState({ count: this.state.count + 1 });
      }.bind(this),
      milliseconds
    );
  }

  //calls addToCount based off of the statistic number using a for loop
  //divides 1500ms by the statistic number and adds that to totalMilliseconds so the number and skills bar finish animating at the same time
  callAddToCount() {
    let totalMilliseconds = 0;
    let milliseconds = 1500 / this.props.statisticNumber;
    for (let i = 0; i < this.props.statisticNumber; i++) {
      totalMilliseconds = totalMilliseconds + milliseconds;
      this.addToCount(totalMilliseconds);
    }
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ statNum: this.props.statisticNumber });
      }.bind(this),
      1000
    );
    setTimeout(
      function() {
        this.setState({ count: 0 });
      }.bind(this),
      1000
    );
    setTimeout(this.callAddToCount, 1000);
  }

  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={666}>
          <div style={container320}>
            <div style={statisticName320}>{this.props.statisticName}</div>
            <div style={outerSkillsBar320}>
              <div style={createInnerSkillsStyle320(this.state.statNum)} />
              <div style={statNumber320}>{this.state.count}</div>
            </div>
            {/* <div style={spaceBetweenSkillBar320}> </div> */}
          </div>
        </MediaQuery>

        {/* <MediaQuery minDeviceWidth={667} maxDeviceWidth={1023}>
          <div style={container}>
            <div style={statisticName}>{this.props.statisticName}</div>
            <div style={outerSkillsBar}>
              <div style={createInnerSkillsStyle(this.state.statNum)} />
  <div style={statNumber}>{this.state.count}</div>
            </div>
            <div style={spaceBetweenSkillBar}> </div>
          </div>
        </MediaQuery> */}

        <MediaQuery minDeviceWidth={1024}>
          <div style={container1024}>
            <div style={statisticName1024}>{this.props.statisticName}</div>
            <div style={outerSkillsBar1024}>
              <div style={createInnerSkillsStyle1024(this.state.statNum)} />
              <div style={statNumber1024}>{this.state.count}</div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

SkillsBar.propTypes = {
  statisticNumber: PropTypes.number.isRequired
};

export default SkillsBar;

//ComponentDidMount only mounts once so use this to check if the current prop and nextProp are different
//If it is different then it calls setState and changes the value of statNum and count and calls callAddToCount
// componentWillReceiveProps(nextProps) {
//   console.log("bitch Im in here");
//   if (this.props.statisticNumber !== nextProps.statisticNumber) {
//     setTimeout(
//       function() {
//         this.setState({ statNum: nextProps.statisticNumber });
//       }.bind(this),
//       1000
//     );
//     setTimeout(
//       function() {
//         this.setState({ count: 0 });
//       }.bind(this),
//       1000
//     );
//     setTimeout(this.callAddToCount, 1000);
//   }
// }
