// ### Basic JavaScript

// This is an in-line comment

/*
    This is an multi-line
    comment
*/

// JavaScript provides seven different data types which are 
// undefined, null, boolean, string, symbol, number, and object.

var ourName;
var a;
var b = 2;
var ourVar = 19;

// #Uninitialized Variables
var z; // initial value of undefined
// NaN = Not a Number

// #Case Sensitivity
// distinct variables
var MyCase;
var myCase;
var Mycase;

var myNumber;
myNumber = 12 + 2;
myNumber = 12 - 8;
myNumber = 10 * 10;
myNumber = 12 / 6;

// increment
var i = 0;
i++;
i = i + 1;

// decrement
var j = 0;
j--;
j = j - 1;

// decimal - floating point numbers
var d = 5.2;
var product = 2.0 * 0.0;

var quotient = 4.8 / 2.0;

var remainder = 5 % 2;

// 17 % 2 = 1 --> 17 is odd
// 16 % 2 = 0 --> 16 is even

var my = 1;
my += 5;
my -= 2;
my *= 12;
my /= 3;
console.log(my);

// String " or '
var firstName = "Alan";
var lastName = "Turing";

// Escaping Literal \"
var sampleStr = 'Alan said \" Yunus Emre learning Javascript\" ';

var ourStr = "I come first." + "I come second.";

var r = "I come first.";
r += "I come second.";

var feed = "freecodecamp";
var last = "Hello, our name is " + feed + ", how are you ?";

var f1 = "feed1";
var f2 = "feed2";
f1 += f2;


var length = 0;
var love = "localization";
length = love.length;


var g = "YunusEmreKeskin";
var firsLetter = "yemrekeskin"[0];
firsLetter = g[0];
console.log(firsLetter);

// # String Immutability
// In JavaScript, String values are immutable (unchangable), 
// which means that they cannot be altered once created.
var your = "Bob";
your[0] = "H";


// # Find the Nth Character in a String
var company = "Yunus Emre Keskin";
var secondLetterOfCompany = company[1];

// # Find the Last Character in a String
var factory = "FiratKurt";
var lastOfIt = factory[factory.length - 1];

// # Find the Nth-to-Last Character in a StringPassed
var desk = "MyDesktop";
var nthofIt = desk[desk.length - 3];

// # With JavaScript array variables, we can store several pieces of data in one place.
var sandwich = ["peanut butter","jelly","bread"];
var ourArray = ["john", 3];

var bizimDizi = [["the universe",42],["everything",101010]];
var bizimDizi2 = [];


var fuck = [50,60,70];
fuck[0]; // = 50
var dam = fuck[1]; // = 60 

var years = [111,222,333];
years[0] = 444;


var days = [
    [1,2,3,4],
    ["persembe"],
    666,
    [5,6,7],
    [8]
];
var w = days[0];
var x = days[3];


// # .push = append data to the end of an array = add 
var names = [1,2,3,4,5,6,7,8,9,0];
names.push("one");
names.push("two");
names.push(3);

// # .pop = removes the last element from an array and returns that element.
// popped off
var result = names.pop(); // equal to 3
result = names.pop(); // equal to "two"


// # That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
// shifted off
var ourLastNames = ["Stimpson","J", ["cat"]];
var hello =  ourLastNames.shift(); // equal to "Stimpson";

// # .unshift() = .pop()

// # Write Reusable JavaScript with Functions
function functionName() {
    console.log("Hello World !");
}

functionName();

function Result(param1, param2) {
    console.log(param1,param2);
}

var grade1 = 0;
var grade2 = 1;
Result(grade1,grade2);


// # GLobal Variables
var myGlobal;
var oppsGLobal;

function fun1() {
    
}

function fun2() {
    var output;
    if(typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if(typeof oppsGLobal != "undefined") {
        output += "oppsGlobal:" + oppsGLobal;
    }
    console.log(output);
}

// # Local Variables

function myTest() {
   var loc = "foo";
   console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined


// # return value
function minusSeven(num) {
    return num - 7;
}
var answer = minusSeven(45);

// # Undefined Value returned from a Function
var sum = 0;
function sum(num) {
    sum = sum + num;
}
sum(5); // sum  will be modified but returned value is undefined;


var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

var testArr = [1,2,3];
console.log(JSON.stringify(testArr));


// # IF
function myTest(isItTrue) {
    if(isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function equalityTest(myVal) {
    if(myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

// 1 == 1     TRUE
// 1 == 2     FALSE
// 1 == '1'   TRUE performs type conversion
// "3" == 3   TRUE performs type conversion

// # Equality operator == performs type conversion
// # Strict Equality Operator ===  dont performs type conversion
// type and value equality

var isTrue = 5 === 3;

typeof 3 // returns number
typeof '3' // return string

1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false

// # Strict Inequality OperatorPassed

3 !== 3   // false
3 !== '3' // true
4 !== 3   // true

// #Greater Than Operator

5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false

6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false

2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false

4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false 


// AND Operators &&

var result1;
if (num > 5) {
    if (num < 10) {
        result1 = "Yes";
    }
}

var result2;
if (num > 5 && num < 10) {
   result2 = "Yes";
}
result2 = "No";

// OR Operators ||

function name1(params) {
    if (num > 10) {
        return "No";
    }
    if (num < 5) {
        return "No";
    }
    return "Yes";
}

function name2(params) {
    if (num > 10 || num < 5) {
      return "No";
    }
    return "Yes";
}

// IF
// ELSE IF

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// Switch 1
switch(lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
}


switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;  
    default: // default
      defaultStatement;
      break;
  }



  switch(val) {
    case 1:
    case 2:
    case 3:
      result = "1, 2, or 3";
      break;
    case 4:
      result = "4 alone";
  }

  function isEqual(a,b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

function isEqual(a,b) {
    return a === b;
}


function myFun() {
   console.log("Hello");
   return "World";
   console.log("byebye")
}
myFun();


// # Objects

var cat = {
    "name":"Whisker",
    "legs":4,
    "tails":1,
    "enemies":["water","dog"]
};

var anotherExample = {
    make:"makname",
    3:"test",
    "model":"focus"
};

var myObj = {
    prop1:"val1",
    prop2:"val2",
    "Space Name":"Kirk",
    "More Space":"Spock"
};

var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
var prop3val = myObj["Space Name"];
var prop4val = myObj["More Space"];

var dogs = {
    Fido:"Mutt",
    Hunter:"Doberman",
    Snope:"Beagle"
};


var myDog = "Hunter";
var myDoberman = dogs[myDog];
Console.log(myDoberman);












































