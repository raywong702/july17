import ReactDOMServer from 'react-dom/server';
import React from 'react';
import axios from 'axios';

import App from '../app/components/App';

export default async () => {
  const { data: deals } = await axios.get('http://localhost:3000/api');

  const initialData = {
    deals,
    discounts: [
      'caa2365cf9d5d80d62099e3456c9e0b2',
      'ac9bd5ec830197693b93cc1bb86a5480',
    ],
  };

  const initialMarkup = ReactDOMServer.renderToString(
    <App data={initialData} />
  );

  return {
    initialMarkup,
    initialData,
  };
};
