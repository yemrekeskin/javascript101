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























