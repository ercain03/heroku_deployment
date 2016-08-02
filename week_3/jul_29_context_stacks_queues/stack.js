'use strict';
//LIFO
function Stack() {
  this.push = Array.prototype.push;
  this.pop = Array.prototype.pop;
  this.peek = function(){
    return this[this.length -1];
  };
}

var stack = new Stack();
stack.push('a');
stack.push('b');
console.log(stack.peek());
console.log(stack.length);
