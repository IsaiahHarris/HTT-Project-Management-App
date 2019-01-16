require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./db/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Page not found!' });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
