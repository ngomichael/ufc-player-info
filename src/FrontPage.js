import React, {Component} from 'react';
import Header from './Header';
import Fighter from './Fighter';

const titleStyles = {
    display: 'flex',
    position: 'relative',
    width: '1em',
    letterSpacing: '25px',
    flexDirection: 'column',
    fontFamily: 'Roboto Slab',
    fontWeight: '700',
    fontSize: '700%',
};

const frontPageStyles = {
    display: 'flex',
    alignItems: 'center',
};

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div style={frontPageStyles}>
                    <div style={titleStyles}>
                        Pick a Fighter
                    </div>
                    <Fighter/>
                </div>

                <div>
                    <Header/>
                </div>
            </div>
        )
    }
}

export default FrontPage