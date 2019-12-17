"use strict";

var camper = 'James';
var camper = 'David';
console.log(camper);


let result = 'James';
//let result = 'David'; // throw an error
console.log(result);

var x;
x = 3.14; // ReferenceError: x is not defined

// # Compare Scopes of the var and let KeywordsPassed

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log("numArray: " + numArray);
// returns [0, 1, 2]
console.log("i: " + i);
// returns 3


// CASE 1

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3 !!!!!!


// CASE 2
'use strict';
let printNumTwo1;
for (let j = 0; j < 3; j++) {
  if (j === 2) {
    printNumTwo1 = function() {
      return j;
    };
  }
}
console.log(printNumTwo1());
// returns 2
// console.log(j);
// returns "i is not defined"


// # Declare a Read-Only Variable with the const KeywordPassed
// const - readonly
const FAV_RET = "Cats";
// FAV_RET = "Dogs" // returns error




// # Mutate an Array Declared with constPassed
"use strict";
const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log("s-> " + s); // returns [5, 6, 45]


// # Prevent Object MutationPassed
let obk = {
    "name":"freecodecamp",
    "review":"aswesome"
};
Object.freeze(obk);
// obk.review = "sdgfsd"; // will be ignored. Mutation not allowed
// obk.newprop = "test";  // will be ignored. Mutation not allowed
console.log(obk);



// # Use Arrow Functions to Write Concise Anonymous Functions
const myFunc = function () {
    const myVar = "value";
    return myVar;
}

const myFunc1 = () => {
    const myVar = "value";
    return myVar;
}

const strFunc = () => {
    return "value";
}

const mathFunc = () => "value";


// # Write Arrow Functions with Parameters

const doubler = (item) => item * 2;
const doubler2 = item => item * 5;

const multiplier = (item,multi) => item * multi;
console.log("multiplier -> " + multiplier(5,54));

const myConcat = (arr1,arr2) => arr1.concat(arr2); 
console.log(myConcat([1, 2], [3, 4, 5]));


const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting());
console.log(greeting("John"));


const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

// # Use the Rest Parameter with Function Parameters
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

const newsum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};

// Spread Operator ...arr

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
var min = Math.min.apply(null,arr);
console.log(maximus);
console.log(min);

var maximusVal = Math.max(arr);
console.log(maximusVal);

var newMaximus = Math.max(...arr); // spread array
console.log("NewMaximus - > " + newMaximus);

// another way to find min or max in an array
// arr.min();
// arr.max();


function myFunction(x, y, z) { return x+y+z; }
var args = [0, 1, 2];
var result1 = myFunction.apply(null, args); 
console.log(result1);

// yerine 

var result2 = myFunction(...args);
console.log(result2);

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

// copy array
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// remove duplicate items and return new array
const array = [1,2,2,3,5];
let newArray = [...new Set(arr)];
console.log(newArray);


// # ES6: Use Destructuring Assignment to Extract Values from Objects

const user = { name: 'John Doe', age: 34 };

const name1 = user.name; // name = 'John Doe'
const age1 = user.age; // age = 34

const { name, age } = user;
// name = 'John Doe', age = 34



// # ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// change code below this line

const { today: { low:lowToday, high:highToday  }} = LOCAL_FORECAST;

// change code above this line

console.log(lowToday); // should be 64
console.log(highToday); // should be 77

// # ES6: Use Destructuring Assignment to Assign Variables from Arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [x1, x2,,, x3] = [1, 2, 3, 4, 5, 6];
console.log(x1, x2, x3); // 1, 2, 5


// Example
let d = 8, k = 6; 
// change code below this line

[d,k] = [k,d];

// change code above this line
console.log(d); // should be 6
console.log(k); // should be 8

// # ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [r, t, ...arrX] = [1, 2, 3, 4, 5, 7];
console.log(r, t); // 1, 2
console.log(arrX); // [3, 4, 5, 7]

// # ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (data) => {
  const { name, age, nationality, location } = data; 
}

const profileUpdateOfIt = ({ name, age, nationality, location }) => {
   /* do something with these  fields */
}

// # ES6: Create Strings using Template Literals
// ${ .... }

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greetingNew = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greetingNew); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.


// # ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
console.log(getMousePosition());


const getMousePositionNew = (x, y) => ({ x, y });
console.log(getMousePositionNew());

// # ES6: Write Concise Declarative Functions with ES6


const personOld = {
  name: "Emre",
  sayHello: function () {
    return `Hello! My name is ${ this.name} `;
  }
};

const personNew = {
  name: "Yunus Emre",
  sayHello() {
    return `Hello! My name is ${ this.name} `;
  }
};

// # ES6: Use class Syntax to Define a Constructor Function

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');


class SpaceShuttleNew {
  
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeud = new SpaceShuttleNew("Jupiter");


// # ES6: Use getters and setters to Control Access to an Object

class Book {

  constructor(author) {
    this._author = author;
  }

  get author() {
    return this._author;
  }

  set author(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const lol = new Book('anonymous');
console.log(lol.author);

lol.setAuthor = 'updated anonymous';
console.log(lol.author);


// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }
  
//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }
  
//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }








