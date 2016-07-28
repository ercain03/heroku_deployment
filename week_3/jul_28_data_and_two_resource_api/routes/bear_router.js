'use strict';
const Bear = require('../models/bear');
const express = require('express');
const jsonParser = require('body-parser').json();
const HandleError = require('../lib/handle_error');

let bearRouter = module.exports = exports = express.Router();

bearRouter.get('/', (req, res, next) => {
  Bear.find().then(res.json.bind(res), HandleError(500, next, 'Server Error'));
});

bearRouter.post('/', jsonParser, (req, res, next) => {
  Bear(req.body).save().then(res.json.bind(res), HandleError(400, next));
});

bearRouter.put('/:id', jsonParser, (req, res, next) => {
  Bear.findOneAndUpdate({'_id': req.params.id}, req.body)
    .then(res.json.bind(res), 
      HandleError(400, next));
});

bearRouter.delete('/:id', jsonParser, (req, res, next) => {
  Bear.remove({'_id': req.params.id}).then(res.json.bind(res), HandleError(404, next, 'No Such Bear'));
});
