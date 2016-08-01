var a = {
  value: 5
};

var b = {
  value: 1
};

var incVal = function(input) {
  input = input || 1;
  return this.value += input;
};

console.log(incVal.call(a));
console.log(incVal.call(b, 5));
console.log(incVal.apply(a, [3]));
var newFunc = incVal.bind(a);
console.log(newFunc(3));
console.log(newFunc());
console.log(newFunc());
