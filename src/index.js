import './style.css';
// import Print from './print';
import { cube } from './math.js';

// async function getComponent() {
//     const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
//     const element = document.createElement('div');
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     // element.onclick = Print.bind(null, 'Hello webpack!');
//
//     return element;
// }
// getComponent().then(component => {
//   document.body.appendChild(component);
// })

function component() {
  const element = document.createElement('pre');
  element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());