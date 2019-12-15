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















