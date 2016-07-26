'use strict';

const express = require('express');
const Router = express.Router;
let app = express();
let helloRouter = require('./helloRouter');

app.get('/hello', (req, res) => {
  res.json({msg: 'from app'});
});

app.use('/api', helloRouter);
app.get('*', (req, res) => {
  res.status(404).json({msg: 'gotta catch em\' all'});
});

app.listen(3000, () => console.log('server up'));
