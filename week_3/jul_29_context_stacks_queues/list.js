// call vs apply

function List() {
  this.alist = [];
  this.addToList = function(item, item2) {
    this.alist.push(item, item2);
    return this.alist;
  };
}

var list = new List();
list.addToList([1, 2, 3]);
console.log('list', list.alist);

var tester1 = {
  alist: [3, 4, 5]
};
var listCall = new List();
console.log('use call', listCall.addToList.call(tester1, ['a', 'b', 'c'], 'd'));

var tester2 = {
  alist: [3, 4, 5]
};
var listApply = new List();
console.log('use apply', listApply.addToList.apply(tester2, ['a', 'b', 'c']));
