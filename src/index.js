import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/root.css";
import "./styles/index-light.css";
import "./styles/index-dark.css";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
