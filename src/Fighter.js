import React, {Component} from 'react';

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

class Fighter extends Component {
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            letterSpacing: '0',
            punchesPerMinute: '0',
            strikeDifferential: '0',
            knockdownsLanded: '0',
            takedownsLanded: '0',
            submissionAttempts: '0'
        };
    }

    onMouseOver() {
        this.setState({
            letterSpacing: '3'
        });
    }

    onMouseOut() {
        this.setState({
            letterSpacing: '0'
        })
    }

    handleChange() {
        // this.setState({
        //     punchesPerMinute: '0',
        //     strikeDifferential: '0',
        //     knockdownsLanded: '0',
        //     takedownsLanded: '0',
        //     submissionAttempts: '0'
        // })
        this.props.changeFighter(this.props.name, this.props.country, this.props.record)
    }

    render() {
        return (
            <div>
                <li onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.handleChange} style={hoverFighter(this.state.letterSpacing)}>{this.props.name} </li>
            </div>

        )
    }
}

export default Fighter