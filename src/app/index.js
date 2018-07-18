import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate (
  <App data={window.initialData}/>,
  document.getElementById('root'),
);
