import React, {Component} from 'react';

const container = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    height: '100%'
};

const outerSkillsBar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
    backgroundColor:'#e6e6e6',
    height: '60px',
    borderRadius: '4px',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',

};

const statNumber = {
    display: 'flex',
    paddingLeft: '27%',
    position: 'absolute',
    fontFamily: 'Open Sans',
    fontWeight: '600',
};

const statisticName = {
    position: 'relative',
    margin: '5px 0px',
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#33331a',
};

const spaceBetweenSkillBar = {
    height: '40px'
};

function createInnerSkillsStyle(width) {
    const innerSkillsStyle = {
        width: width + '%',
        backgroundColor:'#990000',
        opacity: '0.9',
        height: '60px',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px',
        borderRadius: '3px',
        transition: 'all 1.5s ease'
    };

    return innerSkillsStyle
}

class CreateSkillsBar extends Component {
    constructor(props) {
        super(props);
        this.callAddToCount = this.callAddToCount.bind(this);
        this.addToCount = this.addToCount.bind(this);
        this.state = {
            statNum: 0,
            count: 0
        };
    }

    addToCount(milliseconds) {
        setTimeout(function() { this.setState({count: this.state.count + 1}); }.bind(this), milliseconds);
    }

    callAddToCount() {
        let totalMilliseconds = 0;
        let milliseconds = 1250/this.props.statisticNumber;
        for (let i = 0; i < this.props.statisticNumber; i++) {

            totalMilliseconds = totalMilliseconds + (milliseconds);
            this.addToCount(totalMilliseconds);
        }
    }

    //ComponentDidMount only mounts once so use this to check if the current prop and nextProp are different
    componentWillReceiveProps(nextProps) {
        if(this.props.statisticNumber !== nextProps.statisticNumber) {
            setTimeout(function() { this.setState({statNum: nextProps.statisticNumber}); }.bind(this), 1000);
            setTimeout(function() { this.setState({count: 0}); }.bind(this), 1000);
            setTimeout(this.callAddToCount, 1000);
        }
    }

    render() {
        return (
            <div style={container}>
                <div style={statisticName}>{this.props.statisticName}</div>
                <div style={outerSkillsBar}>
                    <div style={createInnerSkillsStyle(this.state.statNum)} >
                    </div>
                    <div style={statNumber}>{this.state.count}</div>
                </div>
                <div style={spaceBetweenSkillBar}> </div>
            </div>
        )
    };
}

export default CreateSkillsBar