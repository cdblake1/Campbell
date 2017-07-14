import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './constants.css';
import './reset.css';
import LandingPage from './Components/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
