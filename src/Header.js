import React, {Component} from 'react';
import Statistics from './Statistics';

const fighterInfoStyles = {
    backgroundColor: 'pink',
    textAlign: 'center',
    width: '100%',
    height: '150%',
    fontSize: '176%'
};

const countryStyles = {
    color: 'darkblue'
};

const fighterNameStyles = {
    color: 'black',
};

const statisticContainer = {
    display: 'flex',
    flexDirection: 'column',
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighter: 'El Cucuy',
            country: 'United States'
        };
    }

    render() {
        return (
            <div>
                <div style={fighterInfoStyles}>
                    <div style={countryStyles}>
                        {this.state.country}
                    </div>
                    <div style={fighterNameStyles}>
                        In the red corner, {this.state.fighter}!
                    </div>
                </div>
                <br />
                <div style={statisticContainer}>
                    <Statistics statisticName="Total Strikes Landed" />
                    <Statistics statisticName="Punches Landed Per Minute" />
                    <Statistics statisticName="Strike Differential" />
                    <Statistics statisticName="Knockdowns Landed" />
                    <Statistics statisticName="Takedowns Landed" />
                    <Statistics statisticName="Submission Attempts" />
                </div>
            </div>
        )
    }
}

// Header.propTypes = {
//     country: React.PropTypes.string.isRequired,
//     fighterName: React.PropTypes.string.isRequired
// };

export default Header