import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './css/pc.css';
import './css/mobile.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
