'use strict';

Person.all = [];
Person.count = function(){  //class function
  return this.all.length;
}

function Person(name) { //constructor function
  //this.all = [];
  Person.all.push(this);
  this.name = name; //
  this.sayName = function() {  //instance fn
    return ('my name is ' + this.name);
  }
}
//Person.greet  'static' class function
Person.prototype.greet = function(who) {  //instance fn
  return ('hi to ' + who + ' from ' + this.name);
}

var person = new Person('George');
console.log('sayName: ' + person.sayName());
console.log('greet:' + person.greet('James'));
console.log('class fn count:', Person.count());

Animal.all = [];

function Animal(name){
  this.name = name;
  Animal.all.push(this);
}
// Duck typing
//call
var animal = new Animal('Florence');
console.log('call sayName', person.sayName.call(animal));
console.log('call greet', person.greet.call(animal,'Jane'));
// apply
console.log('apply sayName', person.sayName.apply(animal));
console.log('apply greet', person.greet.apply(animal,['Jane']));
//bind
console.log('bind', person.sayName.bind(animal)());
console.log('bind', person.sayName.bind(animal)('Jane'));

console.log('class fn call', Person.count.call(Animal));
