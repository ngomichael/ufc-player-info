import React, {Component} from 'react';
import Body from './Body';

const fighterInfoStyles = {
    backgroundColor: 'pink',
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
    fontSize: '50px',
    fontFamily: 'PT Sans',
    fontWeight: '700',
};

const recordStyles= {
    position: 'relative',
    fontSize: '20px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: '5px'
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighter: 'Bobby Knuckles',
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
                    <div style={recordStyles}>
                        {this.state.record}
                    </div>
                </div>
                <br />
                <div>
                    <Body />
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