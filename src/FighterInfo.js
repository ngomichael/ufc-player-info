import React, {Component} from 'react';
import Header from './Header';
import Statistics from './Statistics'
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';

function changeCursor(cursor) {
    const fighterChangeStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '20px',
        ontFamily: 'Lato',
        fontWeight: '700',
        color: '#006600',
        cursor: cursor,
        textDecoration: 'none',
    };

    return fighterChangeStyle;
}

const arrowStyle = {
    color: 'black',
};

const headerStyle = {
    position: 'relative',
    top: '90px'
};

class FighterInfo extends Component {
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        this.state = {
            cursor: 'pointer'
        }
    }

    onMouseOver() {
        this.setState({
            cursor: 'pointer'
        })
    }

    onMouseOut() {
        this.setState({
            cursor: ''
        })
    }

    render() {
        return (
            <div>
                <div style={headerStyle}>
                    <Header firstName={this.props.firstName} lastName={this.props.lastName} country={this.props.country} record={this.props.record}/>
                </div>

                <a href="#header" style={changeCursor(this.state.cursor)} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    Change
                    <div style={arrowStyle}>
                        <FontAwesome
                            className='fa fa-long-arrow-up fa-4x'
                            name='upArrow'
                            cssModule={faStyles}
                        />
                    </div>
                    Fighter
                </a>


                <div>
                    <Statistics  strikesPerMinute={this.props.strikesPerMinute} strikeDifferential={this.props.strikeDifferential}
                                 knockdownsLanded={this.props.knockdownsLanded} submissionAttempts={this.props.submissionAttempts}
                                 submissions={this.props.submissions} totalStrikesLanded={this.props.totalStrikesLanded}/>
                </div>
            </div>

        )
    }
}

export default FighterInfo