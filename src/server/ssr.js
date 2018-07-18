import ReactDOMServer from 'react-dom/server';
import React from 'react';
import axios from 'axios';

import App from '../app/components/App';

export default async () => {
  const { data: initialData } = await axios.get('https://bakesaleforgood.com/api/deals');

  const initialMarkup = ReactDOMServer.renderToString(
    <App data={initialData} />
  );

  return {
    initialMarkup,
    initialData,
  };
};
