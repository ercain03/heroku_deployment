'use strict';

const fs = require('fs');
let logFile = fs.createWriteStream('log.txt');
let handleError = (writeStream) => {
  return function(cb) {
    return function(err, data) {
      if (err) return writeStream.write(err.message);
      cb(data);
    };
  };
};

let errHandler = handleError(process.stdout);
let fileLogger = handleError(logFile);
let fscb = errHandler(function(data) {
  console.log(data.toString());
});

fs.readFile('first.txt', fscb);
fs.readFile('second.txt', errHandler(function(data) {
  console.log('from another callback: ' + data.toString());
}));
fs.readFile('third.txt', fileLogger(function(data) {
  console.log('the last one: ' + data.toString());
}));
