'use strict';

function QueueNoOptimize() {
  var array = [];
  this.queue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function() {
    return !!(array.length);
  };
}

var qp = new QueueNoOptimize();
console.log('QueueNoOptimize queue it up:', qp.queue(1));
console.log('QueueNoOptimize dequeue it:', qp.dequeue());
console.log('QueueNoOptimize should report false for has next:', qp.hasNext());
//------------------------------//

function Queue() {
  let array = [];
  let front = 0;

  this.queue = array.push.bind(array);
  this.dequeue = function() {
    if (front >= array.length) return null;
    let next = array[front]; //get the 1 item
    array[front] = null; //set 1st item to null
    front++; //change the location of first item (note array still contains 1st item as null)
    return next; //return 1st item
  };
  this.hasNext = function() {
    return front < array.length ;
  };
}

var q = new Queue();
console.log('Queue queue it up:', q.queue(1));
console.log('Queue dequeue it:', q.dequeue());


console.log('Queue should report "false" for has next:', q.hasNext());
console.log('Queue dequeue it:', q.dequeue());
console.log('Queue queue it up:', q.queue(1));
console.log('Queue should report "true" for has next:', q.hasNext());
