"use strict";

//FIFOq
function Queue() {
  var items = [];
  this.enqueue = Array.prototype.push.bind(items);
  this.dequeue = Array.prototype.shift.bind(items);
  this.hasNext = function(){
    return !!(items.length);
  }
}

let q1 = new Queue();
console.log('NQ',q1.enqueue('a'));
console.log('NQ',q1.enqueue('b'));
console.log('DQ', q1.dequeue());
console.log('hasNext', q1.hasNext());
