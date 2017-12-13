import React, {Component} from 'react';
// import Statistics from './Statistics';

const container = {
    position: 'relative',
    marginTop: '26%',
};

const fighterInfoStyles = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '110px',
    fontSize: '176%',
    top: '400px',
    right: '20%',
};

const countryStyles = {
    color: 'darkblue',
    position: 'relative',
    fontSize: '40px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    top: '5px'
};

const fighterNameStyles = {
    color: 'black',
    fontSize: '80px',
    fontFamily: 'Lato',
    fontWeight: '700',
};

const recordStyles= {
    position: 'relative',
    fontSize: '40px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: '5px',
    color: '#b30000',
};

const line = {
    width: '100%',
    height: '2px',
    backgroundColor: 'black',
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={container}>
                {/*<div style={line}></div>*/}
                <div style={fighterInfoStyles}>
                    <div style={countryStyles}>
                        {this.props.country}
                    </div>
                    <div style={fighterNameStyles}>
                        {this.props.firstName}
                    </div>
                    <div style={fighterNameStyles}>
                        {this.props.lastName}
                    </div>
                    <div style={recordStyles}>
                        {this.props.record}
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

// Header.propTypes = {
//     country: React.PropTypes.string.isRequired,
//     fighterName: React.PropTypes.string.isRequired
// };

export default Header