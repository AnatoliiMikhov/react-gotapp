import React from 'react';
import ReactDOM from 'react-dom';
import getResource from './services/getResource';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

getResource();

ReactDOM.render(<App />, document.getElementById('root'));
