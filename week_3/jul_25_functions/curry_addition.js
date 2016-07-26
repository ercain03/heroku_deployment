'use strict';

let add = function(first) {
  return function(second) {
    return first + second;
  };
};

let addTwo = add(2);
let addFive = add(5);

console.log(addTwo(addFive(addTwo(addTwo(1)))));
