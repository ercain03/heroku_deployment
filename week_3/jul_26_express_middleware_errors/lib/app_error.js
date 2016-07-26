'use strict';

let appError = module.exports = exports = function(statusCode, message, errCb) {
  return function(error) {
    errCb({error, statusCode, message, type: 'AppError'});
  };
};
