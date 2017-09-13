import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render(<Header />, root);
registerServiceWorker();
