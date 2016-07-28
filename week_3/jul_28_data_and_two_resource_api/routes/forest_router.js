'use strict';
const express = require('express');
const Forest = require('../models/forest');
const jsonParser = require('body-parser').json();
const HandleError = require('../lib/handle_error');

let forestBearRouter = require('./forest_bear_router');
let forestRouter = module.exports = exports = express.Router();

forestRouter.get('/', (req, res, next) => {
  let handleDbError = HandleError(500, next, 'Database Error');
  Forest.find().then(res.json.bind(res), handleDbError);
});

forestRouter.get('/:id', (req, res, next) => {
  let handleDbError = HandleError(400, next, 'invalid id');
  let fourOhFour = HandleError(404, next);
  Forest.findOne({'_id': req.params.id}).then((data) => {
    if (!data) return next(fourOhFour(new Error('Forest not found.')))
    res.json(data);
  }, handleDbError);
});

forestRouter.post('/', jsonParser, (req, res, next) => {
  let handleBadValidation = HandleError(400, next);
  (Forest(req.body)).save().then(res.json.bind(res), handleBadValidation);
});

forestRouter.put('/:id', jsonParser, (req, res, next) => {
  (Forest.findOneAndUpdate({'_id': req.params.id}, req.body).then(res.json.bind(res), HandleError(400, next)));
});

forestRouter.delete('/:id', (req, res, next) => {
  (Forest.remove({'_id': req.params.id})).then(res.json.bind(res), HandleError(400, next, 'Bad _id'));
});

forestRouter.use('/:forestId/bear', forestBearRouter);
