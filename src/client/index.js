import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


if (module.hot) {
  // Patch webpack-dev-server to use correct path
  __webpack_public_path__ = "http://localhost:3000/assets/scripts/";
}
