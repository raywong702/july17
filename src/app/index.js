import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

const fetchData = async () => {
  const resp = await axios.get('https://bakesaleforgood.com/api/deals');
  ReactDOM.render(
    <App data={resp.data} />,
    document.getElementById('root'),
  );
};

fetchData();
