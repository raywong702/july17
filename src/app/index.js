import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import storeConfig from './store/storeConfig';

const store = storeConfig(window.initialData);

ReactDOM.hydrate (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
