function Stack() {
  this.items = [];
}
Stack.prototype.push = function(item) {
  this.items.push(item);
};
Stack.prototype.pop = function() {
  this.items.pop();
};
Stack.prototype.peek = function() {
  if (this.items.length < 1) return null;
  return this.items[this.items.length - 1];
};

var stack1 = new Stack();
stack1.push('a');
stack1.push('b');
console.log('value at stack1.items[0]', stack1.items[0]);
console.log('PEEK', stack1.peek());
