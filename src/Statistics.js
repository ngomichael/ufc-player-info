import React, {Component} from 'react';

const statisticsStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'flex-end',
    paddingRight: '10%',
    float: 'right',
    width: '100%',
    height: '300px',
    // marginLeft: '50%'

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
    paddingRight: '5px',
    transition: 'all 1s ease',
};


function createInnerSkillsStyle(width) {
    const innerSkillsStyle = {
        width: width + 'px',
        backgroundColor:'black',
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
            number: '0',
        };
    }

    componentDidMount() {
        setTimeout(function() { this.setState({number: '85'}); }.bind(this), 50);
    }

    render() {
        return (
            <div>
                <div style={statisticsStyles}>
                    <h3>{this.props.statistic}</h3>
                    <div style={outerSkillsBar}>
                        <div style={createInnerSkillsStyle(this.state.number)} >

                        </div>
                        <h4 style={statNumber}>{this.state.number}</h4>
                    </div>
                </div>
            </div>
        )
    };
}

export default Statistics