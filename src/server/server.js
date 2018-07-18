const express = require('express');
const app = express();
import ssrRender from './ssr';
import data from './data';

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const { initialMarkup, initialData } = await ssrRender();
  res.render('index', { initialMarkup, initialData });
});

app.get('/api', (req, res) => {
  res.send(data);
});

app.listen(3000, () => console.info('Example app listening on port 3000!'));
