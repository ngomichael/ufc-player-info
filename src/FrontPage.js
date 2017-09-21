import React, {Component} from 'react';
import Header from './Header';

const titleStyles = {
    display: 'flex',
    position: 'relative',
    width: '1em',
    letterSpacing: '25px',
    flexDirection: 'column',
    fontFamily: 'Roboto Slab',
    fontWeight: '700',
    fontSize: '100px',
    bottom: '200px'
};

class FrontPage extends Component {
    render() {
        return (
            <div>
                <div style={titleStyles}>
                    Pick a Fighter
                </div>
                <div>
                    <Header/>
                </div>
            </div>
        )
    }
}

export default FrontPage