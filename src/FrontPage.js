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
    fontSize: '700%',
};

const frontPageStyles = {
    display: 'flex',
    alignItems: 'center',
};

const rankingsUnderlineContainer = {

};

const rankings = {
    position: 'relative',
    left: '55%',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: '30px'
};

const outerUnderline = {
    position: 'relative',
    left: '55%',
    width: '100%',
    backgroundColor:'white',
    height: '4px',
    borderRadius: '4px',
    transition: 'all 1.5s ease'
};

function animateUnderline(width) {
    const innerUnderline = {
        position: 'relative',
        width: width +'%',
        backgroundColor:'black',
        height: '4px',
        borderRadius: '4px',
        transition: 'all 1s ease'
    };

    return innerUnderline;
}

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingWidth: '0',
        };
    }

    componentDidMount() {
        setTimeout(function() { this.setState({startingWidth: 100}); }.bind(this), 1);
    }

    render() {
        return (
            <div>
                <div style={frontPageStyles}>
                    <div style={titleStyles}>
                        Pick a Fighter
                    </div>
                    <div style={rankingsUnderlineContainer}>
                        <div style={rankings}>Pound for Pound</div>
                        <div style={outerUnderline}>
                            <div style={animateUnderline(this.state.startingWidth)}></div>
                        </div>
                    </div>
                </div>

                <div>
                    <Header/>
                </div>
            </div>
        )
    }
}

export default FrontPage