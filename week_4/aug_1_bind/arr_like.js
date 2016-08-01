'use strict';

let myObj = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

Array.prototype.map.call(myObj, (letter) => {
  console.log(letter.toUpperCase());
});
