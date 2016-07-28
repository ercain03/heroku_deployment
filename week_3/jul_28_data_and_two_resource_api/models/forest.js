'use strict';
const mongoose = require('mongoose');
const Bear = require('./bear');

let ForestSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  location: String 
});

ForestSchema.methods.buildABear = function(bearData) {
  let bear = new Bear(bearData);
  bear.forestId = this._id;
  return bear.save();
};

ForestSchema.methods.addBear = function(bearId) {
  return Bear.findOneAndUpdate({'_id': bearId}, {forestId: this._id});
};

ForestSchema.methods.removeBear = function(bearId) {
  return Bear.findOneAndUpdate({'_id': bearId}, {forestId: null});
};

ForestSchema.methods.findAllBears = function() {
  return Bear.find({forestId: this._id});
};

module.exports = exports = mongoose.model('forest', ForestSchema);
