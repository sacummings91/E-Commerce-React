import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import env from './env';
import checkAuthentication from './utils/checkAuthentication';

async function render() {
  const authentication = await checkAuthentication({
    baseUrl: env.API_BASE_URL
  });
  ReactDOM.render(
    <App authentication={authentication} />,
    document.getElementById('root')
  );
}

render();
