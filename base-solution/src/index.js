// require('./style.css');
import './style.css';
import './index.scss';
import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');
  element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

import(/* webpackChunkName: "bar" */ './bar.js').then(({ add }) => {
  console.log(add(2, 3));
});
document.body.appendChild(component());