const app = require('express')()
const debug = require('debug');
const serverLog = debug('cfdemo:serverlog');
const serverError = debug('cfdemo:servererror');

app.use((req, res, next) => {
  serverLog('from a .use');
  next();
});

app.post('/middleware', (req, res, next) => {
  next(new Error('error from .post'));
});

app.get('/middleware', (req, res, next) => {
  serverLog('inside another .get');
  next(new Error('error from another .get'));
});

app.get('/middleware', (err, req, res, next) => {
  serverLog('one more middleware: ' + err.message);
  next();
});

app.get('/middleware', (req, res, next) => {
  next(new Error('some random error'));
}, (err, req, res, next) => {
  serverError('first middleware: ' + err.message);
  next();
}, (req, res, next) => {
  res.send('error processed\n');
});

app.use((err, req, res, next) => {
  serverError('from the use: ' + err.message);
  next();
});

app.listen(3000, () => console.log('server up'));
