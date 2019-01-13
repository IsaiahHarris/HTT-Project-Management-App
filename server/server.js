require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Page not found!' });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
