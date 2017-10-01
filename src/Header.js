import React, {Component} from 'react';
import Body from './Body';

const container = {
    position: 'relative',
    marginTop: '23%',
    height: '800px'
};

const fighterInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '110px',
    fontSize: '176%'
};

const countryStyles = {
    color: 'darkblue',
    position: 'relative',
    fontSize: '20px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    top: '5px'
};

const fighterNameStyles = {
    color: 'black',
    fontSize: '61px',
    fontFamily: 'Lato',
    fontWeight: '700',
};

const recordStyles= {
    position: 'relative',
    fontSize: '20px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: '5px'
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
                <div style={line}></div>
                <div style={fighterInfoStyles}>
                    <div style={countryStyles}>
                        {this.props.country}
                    </div>
                    <div style={fighterNameStyles}>
                        {this.props.name}
                    </div>
                    <div style={recordStyles}>
                        {this.props.record}
                    </div>
                </div>
                <br />
                <div>
                    <Body  strikesPerMinute={this.props.strikesPerMinute} strikeDifferential={this.props.strikeDifferential}
                           knockdownsLanded={this.props.knockdownsLanded} submissions={this.props.submissions}/>
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