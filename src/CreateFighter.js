//Creates the list of fighters in the FrontPage component
import React, {Component} from 'react';
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -60, scrollDuration: 1000});

//returns rankingsList styles and allows letterSpacing to change
//on mouseover and mouseout
function hoverFighter(spacing) {
    const rankingsList = {
        fontSize: '30px',
        cursor: 'pointer',
        fontFamily: 'Open Sans',
        fontWeight: '400',
        letterSpacing: spacing,
        margin: '15px 0',
        transition: 'all 0.3s ease'
    };
    return rankingsList;
}

const anchorStyle = {
    textDecoration: 'none',
    color: 'black'
};

class Fighter extends Component {
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            letterSpacing: 0,
        };
    }

    onMouseOver() {
        this.setState({
            letterSpacing: 3
        });
    }

    onMouseOut() {
        this.setState({
            letterSpacing: 0
        })
    }

    //when a fighter is clicked it calls this method which changes the states of FrontPage
    handleChange() {
        this.props.changeFighter(this.props.firstName, this.props.lastName, this.props.country, this.props.record, this.props.strikesPerMinute, this.props.headerOpacity,
        this.props.strikeDifferential, this.props.knockdownsLanded, this.props.submissionAttempts ,this.props.submissions, this.props.totalStrikesLanded);
    }

    render() {
        return (
            <div>
                <a href="#statistics" style={anchorStyle}>
                    <li onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.handleChange} style={hoverFighter(this.state.letterSpacing)}>
                        {this.props.firstName} {this.props.lastName}
                    </li>
                </a>
            </div>

        )
    }
}

export default Fighter