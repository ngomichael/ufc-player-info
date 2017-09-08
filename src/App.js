import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FighterInfo from './FighterInfo';

const root = document.getElementById('root');

const fighters = ['Bobby Knuckles', 'Max Blessed Holloway', 'El Cucuy'];
const weightclass = [];

class App extends Component {
    render() {
        return (
            <div>
                <FighterInfo fighterName={fighters[1]} country="Australia" />
            </div>
        )
    }
}

ReactDOM.render(<App />, root);

// export default App;
