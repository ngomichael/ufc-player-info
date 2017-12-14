//Creates the country, fighter name, and record elements
import React, {Component} from 'react';

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

// Header.propTypes = {
//     country: React.PropTypes.string.isRequired,
//     fighterName: React.PropTypes.string.isRequired
// };

export default Header