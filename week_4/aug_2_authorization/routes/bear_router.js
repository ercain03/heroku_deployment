'use strict';

const Bear = require('../models/bear');
const jsonParser = require('body-parser').json();
const ErrorHandler = require('../lib/error_handler');
const jwt_auth = require('../lib/jwt_auth');
const authzn = require('../lib/authorization');
let bearRouter = module.exports = exports = require('express').Router();

bearRouter.get('/', (req, res, next) => {
  Bear.find().then(res.json.bind(res), ErrorHandler(500, next, 'Server Error'));
});

bearRouter.post('/', jsonParser, jwt_auth, authzn(['wrangler']), (req, res, next) => {
  req.body.wranglerId = req.user._id;
  new Bear(req.body).save().then(res.json.bind(res), ErrorHandler(400, next));
});
