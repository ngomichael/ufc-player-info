//Displays the first page that the user sees
import React, {Component} from 'react';
import _ from 'lodash'
import FighterInfo from './FighterInfo';
import CreateFighter from './CreateFighter';
import ScrollableAnchor from 'react-scrollable-anchor'

const fighterData = {
    Demetrious: {
        firstName: "Demetrious",
        LastName: "Johnson",
        country: "United States",
        record: "16-2-1",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Conor: {
        firstName: "Conor",
        LastName: "McGregor",
        country: "Ireland",
        record: "9-1",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Stipe: {
        firstName: "Stipe",
        LastName: "Miocic",
        country: "United States",
        record: "11-2",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Max: {
        firstName: "Max",
        LastName: "Holloway",
        country: "United States",
        record: "14-3",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Daniel: {
        firstName: "Daniel",
        LastName: "Cormier",
        country: "United States",
        record: "12-1",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Cody: {
        firstName: "Cody",
        LastName: "Garbrandt",
        country: "United States",
        record: "6-0",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Joanna: {
        firstName: "Joanna",
        LastName: "Jedrzejczyk",
        country: "Poland",
        record: "8-1",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Tyron: {
        firstName: "Tyron",
        LastName: "Woodley",
        country: "United States",
        record: "8-0",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Jose: {
        firstName: "Jose",
        LastName: "Aldo",
        country: "Brazil",
        record: "8-2",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    },

    Dominick: {
        firstName: "Dominick",
        LastName: "Cruz",
        country: "United States",
        record: "8-1",
        headerOpacity: "1",
        strikesLandedPerMinute: _.random(0, 100),
        strikeDifferential: _.random(0, 100),
        knockdownsLanded: _.random(0, 100),
        submissionAttempts: _.random(0, 100),
        submissions: _.random(0, 100),
        totalStrikesLanded: _.random(0, 100)
    }
}

const titleStyles = {
    width: '1em',
    letterSpacing: '25px',
    flexDirection: 'column',
    fontFamily: 'Roboto Slab',
    fontWeight: '700',
    fontSize: '700%',
    paddingLeft: '50px'
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

//animates 'Pound for Pound" title
function animateRankingsTitle(opacity) {
    const rankingsTitle = {
        position: 'relative',
        letterSpacing: '5px',
        fontFamily: 'Roboto Slab',
        fontWeight: '400',
        fontSize: '40px',
        transition: 'all 1.5s ease',
        opacity: opacity,
    };

    return rankingsTitle;
}

//animates underline under 'Pound for Pound' title
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
            headerOpacity: '0',

            firstName: 'First',
            lastName: 'Last',
            country: 'Country',
            record: '0-0',

            strikesPerMinute: '0',
            strikeDifferential: '0',
            knockdownsLanded: '0',
            submissionAttempts: '0',
            totalStrikesLanded: '0'
        };
    }

    //Function passed to CreateFighter component to change this component's states
    //when a fighter is clicked
    changeFighter(id) {
        const fighter = fighterData[id] 
        this.setState({
            firstName: fighter.firstName,
            lastName: fighter.lastName,
            country: fighter.country,
            record: fighter.record,
            headerOpacity: fighter.headerOpacity,
            strikesPerMinute: fighter.strikesLandedPerMinute,
            strikeDifferential: fighter.strikeDifferential,
            knockdownsLanded: fighter.knockdownsLanded,
            submissionAttempts: fighter.submissionAttempts,
            submissions: fighter.submissions,
            totalStrikesLanded: fighter.totalStrikesLanded
        })
    }

    //Changes the opacity of 'Pound for Pound' title and width of underline under
    //'Pound for Pound' title after component mounts
    componentDidMount() {
        setTimeout(function() { this.setState({width: 100}); }.bind(this), 1);
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1);
    }

    render() {
        return (
            <div>
                <div style={frontPageStyles}>
                    <ScrollableAnchor id="header">
                        <div style={titleStyles}>
                            Pick a Fighter
                        </div>
                    </ScrollableAnchor>
                    <div style={rankingsAndUnderlineContainer}>
                        <div style={animateRankingsTitle(this.state.opacity)}>Pound for Pound</div>
                        <div style={animateUnderline(this.state.width)}></div>
                        <ol>
                            <CreateFighter firstName={fighterData.Demetrious.firstName} lastName={fighterData.Demetrious.lastName} 
                            onClick={() => this.changeFighter("Demetrious")}/>
                            <CreateFighter firstName="Demetrious" lastName="Johnson" country="United States" record="16-2-1" headerOpacity= '1'
                                     strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Conor" lastName="McGregor" country="Ireland" record="9-1" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Stipe" lastName="Miocic" country="United States" record="11-2" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)}  submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Max" lastName="Holloway" country="United States" record="14-3" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Daniel" lastName="Cormier" country="United States" record="12-1" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Cody" lastName="Garbrandt" country="United States" record="6-0" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Joanna" lastName="Jedrzejczyk" country="Poland"  record="8-0" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Tyron" lastName="Woodley" country="United States"  record="8-0" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Jose" lastName="Aldo" country="Brazil"  record="8-0" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                            <CreateFighter firstName="Dominick" lastName="Cruz" country="United States"  record="8-0" headerOpacity= '1'
                                           strikesPerMinute={_.random(1, 100)} strikeDifferential={_.random(1, 100)} knockdownsLanded={_.random(1, 100)}
                                     submissions={_.random(1, 100)} submissionAttempts={_.random(1, 100)} totalStrikesLanded={_.random(1, 100)} changeFighter={this.changeFighter}/>
                        </ol>
                    </div>
                </div>
                <div>
                    <FighterInfo firstName={this.state.firstName} lastName={this.state.lastName} country={this.state.country}
                                 record={this.state.record} headerOpacity={this.state.headerOpacity}
                                 strikesPerMinute={this.state.strikesPerMinute} strikeDifferential={this.state.strikeDifferential}
                                 knockdownsLanded={this.state.knockdownsLanded} submissionAttempts={this.state.submissionAttempts}
                                 submissions={this.state.submissions} totalStrikesLanded={this.state.totalStrikesLanded}/>
                </div>
            </div>
        )
    }
}

export default FrontPage