'use strict';
Array.prototype.myreverse = function() {
  let stack = [];

  this.forEach((item) => {
    stack.push(item);
  });
  var j = 0;
  while (stack.length) {
    this[j++] = stack.pop();
  }
};

var arr = new Array('a', 'b', 'c', 'd');
arr.myreverse();
console.log('reverse abcd', arr);
