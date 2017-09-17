import React, {Component} from 'react';
import Statistics from './Statistics';

const fighterInfoStyles = {
    backgroundColor: 'pink',
    textAlign: 'center',
    width: '100%',
    height: '110px',
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
    position: 'relative',
    left: '65%',
};



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighter: 'El Cucuy',
            country: 'United States',
            record: '23-2-0'
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
                        {this.state.fighter}
                    </div>
                    <div>
                        {this.state.record}
                    </div>
                </div>
                <br />
                <div style={statisticContainer}>
                    <Statistics statisticNumber="55" statisticName="Total Strikes Landed" />
                    <Statistics statisticNumber="5" statisticName="Punches Landed Per Minute" />
                    <Statistics statisticNumber="15" statisticName="Strike Differential" />
                    <Statistics statisticNumber="25" statisticName="Knockdowns Landed" />
                    <Statistics statisticNumber="55" statisticName="Takedowns Landed" />
                    <Statistics statisticNumber="85" statisticName="Submission Attempts" />
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