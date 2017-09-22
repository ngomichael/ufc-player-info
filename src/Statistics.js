import React, {Component} from 'react';

const container = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px',
    marginBottom: '20px',
    height: '100%'
};

const outerSkillsBar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    backgroundColor:'floralwhite',
    height: '40px',
    borderRadius: '4px',

};

const statNumber = {
    display: 'flex',
    paddingLeft: '22%',
    position: 'absolute',
    fontFamily: 'Open Sans',
    fontWeight: '600',
};

const statisticName = {
    position: 'relative',
    margin: '5px 0px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
};

function createInnerSkillsStyle(width) {
    const innerSkillsStyle = {
        width: width + '%',
        backgroundColor:'black',
        opacity: '0.7',
        height: '40px',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px',
        borderRadius: '3px',
        transition: 'all 1.5s ease'
    };

    return innerSkillsStyle
}

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.callAddToCount = this.callAddToCount.bind(this);
        this.addToCount = this.addToCount.bind(this);
        this.state = {
            statisticNumber: '0',
            count: 0
        };
    }

    addToCount(milliseconds) {
        setTimeout(function() { this.setState({count: this.state.count + 1}); }.bind(this), milliseconds);
    }

    callAddToCount() {
        let totalMilliseconds = 0;
        let milliseconds = 1500/this.props.statisticNumber;
        for (let i = 0; i <= this.props.statisticNumber; i++) {

            totalMilliseconds = totalMilliseconds + (milliseconds);
            this.addToCount(totalMilliseconds);
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({statisticNumber: this.props.statisticNumber}); }.bind(this), 1);
        this.callAddToCount();
    }

    render() {
        return (
            <div style={container}>
                <div style={statisticName}>{this.props.statisticName}</div>
                <div style={outerSkillsBar}>
                    <div style={createInnerSkillsStyle(this.state.statisticNumber)} >
                    </div>
                    <div style={statNumber}>{this.state.count}</div>
                </div>
                <br />
            </div>
        )
    };
}

export default Statistics