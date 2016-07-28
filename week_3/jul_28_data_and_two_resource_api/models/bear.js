'use strict';
const mongoose = require('mongoose');

let Bear = module.exports = exports = mongoose.model('Bear', {
  name: {type: String, required: true},
  fishPreference: {type: String, default: 'Salmons'},
  flavor: {type: String, default: 'Grizzly'},
  forestId: String
});
