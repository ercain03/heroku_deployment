'use strict';

function checkBrackets(str) {
  var leftBrackets = /[\[\{\(]/;
  var rightBrackets = /[\]}\)]/;
  var rightToLeft = {
    ']': '[',
    ')': '(',
    '}': '{'
  };
  var bracketStack = []; //new Stack();
  var current;
  for (var i = 0; i < str.length; i++) {
    current = str.charAt(i);
    if (current.match(leftBrackets)) {
      bracketStack.push(current);
    }
    if (current.match(rightBrackets)) {
      if (rightToLeft[current] !== bracketStack.pop()) {
        return false;
      }
    }
  }
  if (bracketStack.length === 0) return true;
  else return false;
}

console.log('checkBrackets [{(abc)}]', checkBrackets('[{(abc)}]'));
console.log('checkBrackets [abc])', checkBrackets('[abc])'));
console.log('checkBrackets ({abc})', checkBrackets('({abc}'));
