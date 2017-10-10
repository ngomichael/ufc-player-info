import React, {Component} from 'react';
import _ from 'lodash'
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
        fontSize: '40px',
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

            firstName: 'First',
            lastName: 'Last',
            country: 'Country',
            record: '0-0',

            strikesPerMinute: '0',
            strikeDifferential: '0',
            knockdownsLanded: '0',
            submissionAttempts: '0'
        };
    }

    changeFighter(newFirstName, newLastName, newCountry, newRecord, strikesPerMinute, strikeDifferential, knockdownsLanded, submissionAttempts, submissions) {
        this.setState({
            firstName: newFirstName,
            lastName: newLastName,
            country: newCountry,
            record: newRecord,
            strikesPerMinute: strikesPerMinute,
            strikeDifferential: strikeDifferential,
            knockdownsLanded: knockdownsLanded,
            submissionAttempts: submissionAttempts,
            submissions: submissions

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
                            <Fighter firstName="Demetrious" lastName="Johnson" country="United States" record="16-2-1"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Conor" lastName="McGregor" country="Ireland" record="9-1"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Stipe" lastName="Miocic" country="United States" record="11-2"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)}  submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Max" lastName="Holloway" country="United States" record="14-3"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded="8"
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Daniel" lastName="Cormier" country="United States" record="12-1"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Cody" lastName="Garbrandt" country="United States" record="6-0"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Joanna" lastName="Jedrzejczyk" country="Poland"  record="8-0"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Tyron" lastName="Woodley" country="United States"  record="8-0"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Jose" lastName="Aldo" country="Brazil"  record="8-0"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <Fighter firstName="Dominick" lastName="Cruz" country="United States"  record="8-0"
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} changeFighter={this.changeFighter}/>
                        </ol>
                    </div>
                </div>

                <div>
                    <Header firstName={this.state.firstName} lastName={this.state.lastName} country={this.state.country} record={this.state.record} strikesPerMinute={this.state.strikesPerMinute}
                    strikeDifferential={this.state.strikeDifferential} knockdownsLanded={this.state.knockdownsLanded}
                            submissionAttempts={this.state.submissionAttempts} submissions={this.state.submissions}/>
                </div>
            </div>
        )
    }
}

export default FrontPage