import './style.css';

async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
})