/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './less/main.less';


window.onload = function(){
  ReactDOM.render(<App />, document.getElementById('app'));
}