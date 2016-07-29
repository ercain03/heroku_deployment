function Stack() {
  var items = [];
  this.push = items.push.bind(items);
  this.push = items.push.bind(items);
  this.peek = function() {
    return items[items.length - 1];
  };
  this.size = function() {
    return items.length;
  };
}

var stack1 = new Stack();
stack1.push('a');
stack1.push('b');
console.log('SIZE', stack1.size());
console.log('PEEK', stack1.peek());
