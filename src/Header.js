//Displays the country, fighter name, and record
import React, {Component} from 'react';
import PropTypes from "prop-types";

function animateFighterInfo(opacity) {
    const fighterInfoStyles = {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '110px',
        fontSize: '176%',
        top: '450px',
        right: '10px',
        transition: 'all 1.5s ease',
        opacity: opacity
    };

    return fighterInfoStyles;
}

const countryStyles = {
    color: 'darkblue',
    position: 'relative',
    fontSize: '40px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    top: '5px'
};

const fighterNameStyles = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: '80px',
    fontFamily: 'Lato',
    fontWeight: '700',
    right: '35px'
};

const recordStyles= {
    position: 'relative',
    fontSize: '40px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: '5px',
    color: '#b30000',
    top: '5px'
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0
        }
    }

    //ComponentDidMount only mounts once so use this to check if the current prop and nextProp are different
    //If they are different then it calls setState and changes the value of opacity
    componentWillReceiveProps(nextProps) {
        if (this.props.opacity !== nextProps.opacity) {
            setTimeout(function () { this.setState({opacity: nextProps.opacity}); }.bind(this), 1000);
        }
    }

    render() {
        return (
            <div>
                <div style={animateFighterInfo(this.state.opacity)}>
                    <div style={countryStyles}>
                        {this.props.country}
                    </div>
                    <div style={fighterNameStyles}>
                        {this.props.firstName} {this.props.lastName}
                    </div>
                    <div style={recordStyles}>
                        {this.props.record}
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    opacity: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    record: PropTypes.string.isRequired
}

export default Header