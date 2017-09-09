import React, {Component} from 'react';

const statisticsStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    // alignItems: 'center',
    width: '100%',
    height: '300px',
    // marginLeft: '50%'

};

const skillsBar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    backgroundColor:'white',
    height: '40px',
    borderRadius: '4px',
    // transition: 'all 3s linear',
};

const innerSkillsBar = {
    width: '20%',
    backgroundColor:'black',
    height: '40px',
    borderBottomLeftRadius: '4px',
    borderTopLeftRadius: '4px',
};

const statNumber = {
    paddingRight: '5px',
};



class Statistics extends Component {
    render() {
        return (
            <div>
                <div style={statisticsStyles}>
                    <h3>Punches landed per minute:</h3>
                    <div style={skillsBar}>
                        <div style={innerSkillsBar}>

                        </div>
                        <h4 style={statNumber}>55</h4>
                    </div>
                </div>
            </div>
        )
    };
}

export default Statistics