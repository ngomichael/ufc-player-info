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


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statistic: 'Punches landed per minute',
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
                <div>
                    <Statistics statistic={this.state.statistic} />
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