import React, {Component} from 'react';

const rankingsAndUnderlineContainer = {
    position: 'relative',
    left: '50%',
    top: '100px'
};

function animateRankingsTitle(opacity) {
    const rankingsTitle = {
        position: 'relative',
        // left: '5%',
        letterSpacing: '5px',
        fontFamily: 'Roboto Slab',
        fontWeight: '400',
        fontSize: '30px',
        transition: 'all 1.5s ease',
        opacity: opacity,
    };

    return rankingsTitle;
}

function animateUnderline(width) {
    const underline = {
        position: 'relative',
        width: width +'%',
        backgroundColor:'black',
        height: '4px',
        borderRadius: '4px',
        transition: 'all 1.5s ease'
    };

    return underline;
}

function hoverFighter(spacing) {
    const rankingsList = {
        fontSize: '20px',
        cursor: 'pointer',
        fontFamily: 'Open Sans',
        fontWeight: '400',
        letterSpacing: spacing,
        margin: '15px 0',
        transition: 'all 0.3s ease'
    };
    return rankingsList;
}

const fighters = ['Demetrious Johnson', 'Conor McGregor', 'Stipe Miocic', 'Max Holloway', 'Daniel Cormier',
    'Cody Garbrandt', 'Joanna Jedrzejczyk', 'Tyron Woodley', 'Dominick Cruz', 'Jose Aldo' ];

class Fighter extends Component {
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.state = {
            width: '0',
            opacity: '0',
            letterSpacing: '0',
            fightersList: fighters,
        };
    }

    onMouseOver() {
        this.setState({
            letterSpacing: '3'
        })
    }

    onMouseOut() {
        this.setState({
            letterSpacing: '0'
        })
    }

    componentDidMount() {
        setTimeout(function() { this.setState({width: 100}); }.bind(this), 1);
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1);
    }

    render() {
        return (
            <div style={rankingsAndUnderlineContainer}>
                <div style={animateRankingsTitle(this.state.opacity)}>Pound for Pound</div>
                <div style={animateUnderline(this.state.width)}></div>
                <ol>
                    {this.state.fightersList.map((fighter, i) =>
                        <li onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} key={i} style={hoverFighter(this.state.letterSpacing)}>{fighter}</li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Fighter