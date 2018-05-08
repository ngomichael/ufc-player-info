//Creates the skills bar
import React, { Component } from "react";
import PropTypes from "prop-types";

const container = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  height: "100%"
};

const outerSkillsBar = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "30%",
  backgroundColor: "#e6e6e6",
  height: "60px",
  borderRadius: "4px",
  borderBottomRightRadius: "3px",
  borderTopRightRadius: "3px"
};

const statNumber = {
  display: "flex",
  paddingLeft: "27%",
  position: "absolute",
  fontFamily: "Open Sans",
  fontWeight: "600"
};

const statisticName = {
  position: "relative",
  margin: "5px 0px",
  fontFamily: "Open Sans",
  fontWeight: "700",
  color: "#33331a"
};

const spaceBetweenSkillBar = {
  height: "40px"
};

//Returns styles that takes a number and uses that as its width
function createInnerSkillsStyle(width) {
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

class SkillsBar extends Component {
  constructor(props) {
    super(props);
    this.callAddToCount = this.callAddToCount.bind(this);
    this.addToCount = this.addToCount.bind(this);
    this.state = {
      statNum: 0,
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

  //ComponentDidMount only mounts once so use this to check if the current prop and nextProp are different
  //If it is different then it calls setState and changes the value of statNum and count and calls callAddToCount
  componentWillReceiveProps(nextProps) {
    if (this.props.statisticNumber !== nextProps.statisticNumber) {
      setTimeout(
        function() {
          this.setState({ statNum: nextProps.statisticNumber });
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
  }

  render() {
    return (
      <div style={container}>
        <div style={statisticName}>{this.props.statisticName}</div>
        <div style={outerSkillsBar}>
          <div style={createInnerSkillsStyle(this.state.statNum)} />
          <div style={statNumber}>{this.state.count}</div>
        </div>
        <div style={spaceBetweenSkillBar}> </div>
      </div>
    );
  }
}

SkillsBar.propTypes = {
  statisticNumber: PropTypes.number.isRequired
};

export default SkillsBar;
