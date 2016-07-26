const app = require('express')()
const debug = require('debug');
const serverLog = debug('cfdemo:serverlog');
const serverError = debug('cfdemo:servererror');

app.get('/middleware', (req, res, next) => {
  serverLog('hello from middleware');
  next();
}, (req, res) => {
  res.json({msg: 'end of middleware'});
}, (err, req, res, next) => {
  serverError('in request to ' + req.url + ' using method: ' + req.method);
  serverError(err);
});

app.listen(3000, () => console.log('server up'));
