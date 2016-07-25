'use strict';

const http = require('http');
const Router = require('./lib/router');

let routes = new Router('/api');

routes.put('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write('{"msg": "hello world"}');
  res.end();
});

module.exports = http.createServer(routes.route());
