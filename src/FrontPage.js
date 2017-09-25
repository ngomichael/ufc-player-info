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

function animateUnderline(width) {
    const underline = {
        position: 'relative',
        width: width +'%',
        backgroundColor:'black',
        height: '4px',
        borderRadius: '4px',
        transition: 'all 1.5s ease'
    };

    return underline;
}

class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.changeFighter = this.changeFighter.bind(this);
        this.state = {
            width: '0',
            opacity: '0',
            name: 'Name',
            country: 'Country',
            record: '0-0'
        };
    }

    changeFighter(newName, newCountry, newRecord) {
        this.setState({
            name: newName,
            country: newCountry,
            record: newRecord
        })
    }


    componentDidMount() {
        setTimeout(function() { this.setState({width: 100}); }.bind(this), 1);
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1);
    }

    render() {
        return (
            <div>
                <div style={frontPageStyles}>
                    <div style={titleStyles}>
                        Pick a Fighter
                    </div>
                    <div style={rankingsAndUnderlineContainer}>
                        <div style={animateRankingsTitle(this.state.opacity)}>Pound for Pound</div>
                        <div style={animateUnderline(this.state.width)}></div>
                        <ol>
                            <Fighter name="Demetrious Johnson" country="United States" record="16-2-1" changeFighter={this.changeFighter}/>
                            <Fighter name="Conor McGregor" country="Ireland" record="9-1" changeFighter={this.changeFighter}/>
                            <Fighter name="Stipe Miocic" country="United States" record="11-2" changeFighter={this.changeFighter}/>
                            <Fighter name="Max Holloway" country="United States" record="14-3" changeFighter={this.changeFighter}/>
                            <Fighter name="Daniel Cormier" country="United States" record="12-1" changeFighter={this.changeFighter}/>
                            <Fighter name="Cody Garbrandt" country="United States" record="6-0" changeFighter={this.changeFighter}/>
                            <Fighter name="Joanna Jedrzejczyk" country="Poland" record="8-0" changeFighter={this.changeFighter}/>
                            <Fighter name="Tyron Woodley" country="United States" record="13-3-1" changeFighter={this.changeFighter}/>
                            <Fighter name="Dominick Cruz" country="United States" record="12-2" changeFighter={this.changeFighter}/>
                            <Fighter name="Jose Aldo" country="Brazil" record="16-2" changeFighter={this.changeFighter}/>
                        </ol>
                    </div>
                </div>

                <div>
                    <Header name={this.state.name} country={this.state.country} record={this.state.record}/>
                </div>
            </div>
        )
    }
}

export default FrontPage