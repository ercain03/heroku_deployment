const app = require('express')();
const debug = require('debug');
const serverLog = debug('cfdemo:serverlog');
const serverErrLog = debug('cfdemo:servererror');
const jsonParser = require('./lib/json_parser');
const bodyParser = require('body-parser');
const appError = require('./lib/app_error');

app.post('/somejson', jsonParser(401, 'crappy json'), (req, res, next) => {
  serverLog(req.body); 
  res.send(':thumbsup:\n');
});

app.post('/bodyparser', bodyParser.json(), (req, res) => {
  serverLog(req.body);
  res.send('from body parser\n');
});

app.use((err, req, res, next) => {
  if (err.type === 'AppError') return next(err);
  appError(500, 'internal server error', next)(err);
});

app.use((err, req, res, next) => {
  serverErrLog(err.error.message);
  res.status(err.statusCode).json({msg: err.message});
});

app.listen(3000, () => console.log('server up'));
