import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import FrontPage from "./FrontPage";

const root = document.getElementById('root');

ReactDOM.render(<FrontPage />, root);
registerServiceWorker();
