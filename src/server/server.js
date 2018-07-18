const express = require('express');
const app = express();
import ssrRender from './ssr';

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const { initialMarkup, initialData } = await ssrRender();
  res.render('index', { initialMarkup, initialData });
});

app.listen(3000, () => console.info('Example app listening on port 3000!'));
