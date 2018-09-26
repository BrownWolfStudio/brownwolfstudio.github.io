import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let state = {
    orgName: "Brown Wolf Studio"
};
ReactDOM.render(<App {...state} />, document.getElementById('root'));
registerServiceWorker();
