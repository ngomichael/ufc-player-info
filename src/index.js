import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';
import FrontPage from "./FrontPage";

const root = document.getElementById('root');

ReactDOM.render(<FrontPage />, root);
registerServiceWorker();
