const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world from YoYo');
});

module.exports = app;
