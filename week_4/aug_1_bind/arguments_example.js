'use strict';
let sum = function() {
  return Array.prototype.reduce.call(arguments, (left, right) => {return left + right}, 0);
};

console.log(sum(1,3,4,5));
console.log(sum(5,5,5,5,5));
console.log(sum(1,2));
console.log(sum(50));
