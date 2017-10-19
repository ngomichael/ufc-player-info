import React, {Component} from 'react';
import Header from './Header';
import Statistics from './Statistics'


class FighterInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header firstName={this.props.firstName} lastName={this.props.lastName} country={this.props.country} record={this.props.record}
                        strikesPerMinute={this.props.strikesPerMinute} strikeDifferential={this.props.strikeDifferential}
                        knockdownsLanded={this.props.knockdownsLanded} submissionAttempts={this.props.submissionAttempts} submissions={this.props.submissions}/>

                    <Statistics  strikesPerMinute={this.props.strikesPerMinute} strikeDifferential={this.props.strikeDifferential}
                                 knockdownsLanded={this.props.knockdownsLanded} submissionAttempts={this.props.submissionAttempts} submissions={this.props.submissions}/>
            </div>
        )
    }
}

export default FighterInfo