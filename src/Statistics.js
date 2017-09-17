import React, {Component} from 'react';

const container = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px',
    marginBottom: '20px'
};

const outerSkillsBar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    backgroundColor:'white',
    height: '40px',
    borderRadius: '4px',

};

const statNumber = {
    display: 'flex',
    paddingLeft: '22%',
    position: 'absolute'
};

const statisticName = {
    position: 'relative',
    margin: '5px 0px',

};

function createInnerSkillsStyle(width) {
    const innerSkillsStyle = {
        width: width + '%',
        backgroundColor:'black',
        opacity: '0.7',
        height: '40px',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px',
        transition: 'all 1s ease'
    };

    return innerSkillsStyle
}

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statisticNumber: '0',
        };
    }

    componentDidMount() {
        setTimeout(function() { this.setState({statisticNumber: this.props.statisticNumber}); }.bind(this), 1);
    }

    render() {
        return (
            <div style={container}>
                <h3 style={statisticName}>{this.props.statisticName}</h3>
                <div style={outerSkillsBar}>
                    <div style={createInnerSkillsStyle(this.state.statisticNumber)} >
                    </div>
                    <div style={statNumber}>{this.state.statisticNumber}</div>
                </div>
                <br />
            </div>
        )
    };
}

export default Statistics