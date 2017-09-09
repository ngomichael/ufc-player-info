import React, {Component} from 'react';
import Header from './Header';

const fighters = ['Bobby Knuckles', 'Max Blessed Holloway', 'El Cucuy'];

class App extends Component {
    render() {
        return (
            <div>
                <Header fighterName={fighters[1]} country="Australia" />
            </div>
        )
    }
}

export default App;
