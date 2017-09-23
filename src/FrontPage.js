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

const rankingsAndUnderlineContainer = {
    position: 'relative',
    left: '50%',
    top: '100px'
};

function animateRankingsTitle(opacity) {
    const rankingsTitle = {
        position: 'relative',
        // left: '5%',
        letterSpacing: '5px',
        fontFamily: 'Roboto Slab',
        fontWeight: '400',
        fontSize: '30px',
        transition: 'all 1.5s ease',
        opacity: opacity,
    };

    return rankingsTitle;
}

const outerUnderline = {
    position: 'relative',
    // left: '5%',
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
        transition: 'all 1.5s ease'
    };

    return innerUnderline;
}

const rankingsList = {
    fontSize: '20px'
};

const fighters = ['Demetrious Johnson', 'Conor McGregor', 'Stipe Miocic', 'Max Holloway', 'Daniel Cormeir', 'Cody Garbrandt', 'Joanna Jedrzejczyk', 'Tyron Woodley', 'Dominick Cruz', 'Jose Aldo' ];
const rankedFightersItems = fighters.map((fighter) =>
    <li style={{margin: '15px 0'}}>{fighter}</li>
);

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingWidth: '0',
            startingOpacity: '0',
        };
    }


    componentDidMount() {
        setTimeout(function() { this.setState({startingWidth: 100}); }.bind(this), 1);
        setTimeout(function() { this.setState({startingOpacity: 1}); }.bind(this), 1);
    }

    render() {
        return (
            <div>
                <div style={frontPageStyles}>
                    <div style={titleStyles}>
                        Pick a Fighter
                    </div>
                    <div style={rankingsAndUnderlineContainer}>
                        <div style={animateRankingsTitle(this.state.startingOpacity)}>Pound for Pound</div>
                        <div style={outerUnderline}>
                            <div style={animateUnderline(this.state.startingWidth)}></div>
                        </div>
                        <ol style={rankingsList}>
                            {rankedFightersItems}
                        </ol>
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