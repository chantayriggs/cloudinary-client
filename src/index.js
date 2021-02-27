import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import StateProvider from "../src/context/stateContext"


ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
)