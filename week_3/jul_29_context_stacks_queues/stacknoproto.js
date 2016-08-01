'use strict';
//LIFO
function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.size = function() {
    return items.length;
  };
  this.clear = function() {
    items = [];
  };
  this.print = function() {
    console.log(items.toString());
  };
}

let stack1 = new Stack();
stack1.push('a');
stack1.push('b');
console.log('SIZE', stack1.size());
console.log('PRINT', stack1.print());
console.log('PEEK', stack1.peek());
console.log('ISEMPTY', stack1.peek());
console.log('POP', stack1.pop());
console.log('CLEAR', stack1.clear());
console.log('SIZE', stack1.size());
