import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

//let store = createStore();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
