//Change this to Header for Component name and file name
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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

class FighterInfo extends Component {
    render() {
        return (
            <div style={fighterInfoStyles}>
                <div style={countryStyles}>
                    {this.props.country}
                </div>
                <div style={fighterNameStyles}>
                    In the blue corner, {this.props.fighterName}!
                </div>
            </div>
        )
    }
}

export default FighterInfo