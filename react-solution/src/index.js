// require('./style.css');
import './style.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Webpack and Babel';

ReactDOM.render(
<div>{title}</div>,
  document.getElementById('app')
);