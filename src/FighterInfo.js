import React, {Component} from 'react';
import Header from './Header';
import Statistics from './Statistics'
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';

const fighterChangeStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ontFamily: 'Lato',
    fontWeight: '700',
    color: '#006600',
    cursor: 'pointer',
    textDecoration: 'none',
    top: '190px'
};



const arrowStyle = {
    color: 'black',
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
                <div>
                    {/*Has to do something with this that's why a div is covering some of the fighters*/}
                    <Header firstName={this.props.firstName} lastName={this.props.lastName} country={this.props.country} record={this.props.record}/>
                </div>

                <a href="#header" style={fighterChangeStyle} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    {/*Change*/}
                    <div style={arrowStyle}>
                        <FontAwesome
                            className='fa fa-long-arrow-up fa-4x'
                            name='upArrow'
                            cssModule={faStyles}
                        />
                    </div>
                    {/*Fighter*/}
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