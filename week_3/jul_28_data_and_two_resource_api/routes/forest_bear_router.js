'use strict';
const Forest = require('../models/forest');
const jsonParser = require('body-parser').json();
const express = require('express');
const HandleError = require('../lib/handle_error');

let forestBearRouter = module.exports = exports = express.Router({mergeParams: true});
let findForest = function(req, res, next) {
  Forest.findOne({'_id': req.params.forestId})
  .then((forest) => {
    if (!forest) return HandleError(404, next)(new Error('Forest Not Found'));
    req.forest = forest;
    next();
  }, HandleError(404, next, 'No Such Forest'));
};

forestBearRouter.get('/', findForest, (req, res, next) => {
  req.forest.findAllBears().then(res.json.bind(res), HandleError(500, next, 'server error'));
});

forestBearRouter.post('/', jsonParser, findForest, (req, res, next) => {
  req.forest.buildABear(req.body).then(res.json.bind(res), HandleError(400, next));
});

forestBearRouter.put('/:id', findForest, (req, res, next) => {
  req.forest.addBear(req.params.id).then(res.json.bind(res), HandleError(404, next, 'No Such Bear'));
});

forestBearRouter.delete('/:id', findForest, (req, res, next) => {
  req.forest.removeBear(req.params.id).then(res.json.bind(res), HandleError(404, next, 'No Such Bear'));
});
