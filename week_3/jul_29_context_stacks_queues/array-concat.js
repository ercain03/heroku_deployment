'use strict';

function pushArrayElToArray(arr1, arr2) {
  let begin = Date.now(); //timestamp
  Array.prototype.push.apply(arr1, arr2);
  let end = Date.now();
  console.log('pushArrayElToArray array total time: %s sec', (end - begin) / 1000);
  return arr1;
}

function testConcat(arr1, arr2){
  let begin = Date.now(); //timestamp
  arr1.concat(arr2);
  let end = Date.now();
  console.log('concat fn array total time: %s sec', (end - begin) / 1000);
  return arr1;
}

function addArrayElToArray(arr1,arr2){
  let begin = Date.now(); //timestamp
  arr2.forEach((item) =>{
    arr1.push(item);
  })
  let end = Date.now();
  console.log('addArrayElToArray array total time: %s sec', (end - begin) / 1000);
  return arr1;
}

function addArrayElToArrayIter(arr1,arr2){
  let begin = Date.now(); //timestamp
  arr2.forEach((item) =>{
    arr1.push(item);
  })
  for (var i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
  }
  let end = Date.now();
  console.log('Iterate array total time: %s sec', (end - begin) / 1000);
  return arr1;
}


var arr1 = Array.apply(null, {
  length: 100000
}).map(Number.call, Number);

var arr2 = Array.apply(null, {
  length: 100000
}).map(Number.call, Number);
pushArrayElToArray(arr1, arr2);
//console.log(arrayConcat(arr1, arr2));

addArrayElToArray(arr1, arr2);
testConcat(arr1, arr2);
addArrayElToArrayIter(arr1, arr2);
