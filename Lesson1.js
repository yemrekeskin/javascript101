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


var ourDog = {
    "name":"Piti",
    "legs":"4"
};

ourDog.name = "newValue";
ourDog.bark = "bow-wow"; // new properties

ourDog["newBark"] = "new-bow-wow";

// delete new properties
delete myDog.newBark;

var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    24:"C",
    25:"B",
    26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"

// # Testing Objects for Properties

var myObject = {
    top:"hat",
    bottom:"pants"
};

myObject.hasOwnProperty("top");
myObject.hasOwnProperty("middle"); // not exist

// # Manipulating Complex Objects

var ourMusic = [
    {
        "artist":"Draft Punk",
        "title":"Home work",
        "release_year":1887,
        "formats": [ "CD","Casette","LP" ], // nested object
        "gold":true
    }
]


var ourStorage = {
    "desk": {
        "drawer":"stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1":"a file",
            "folder2":"secret"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2; // secret
ourStorage.desk.drawer; // stapler


var ourPets = [
    {
        animalType:"cat",
        names: [
            "Meaozer",
            "Fluffy",
            "Deniz"
        ]    
    },
    {
        animalType:"dog",
        names: [
            "sports",
            "Bowser",
            "Frankie"
        ]
    }
]

ourPets[0].names[2] // Deniz
ourPets[1].names[1] // Bowser

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    
    if(value === "") delete collection[id][prop];
    else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
      } else {
        collection[id][prop] = value;
      }

  return collection;
}
  
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// ARRAYS 

// while : Iterate with JavaScript While Loops
var ExArray = [];
var i = 0;
while (i < 5) {
    ExArray.push(i);
    i++;
}

// Sample
var myArray = [];
// Only change code below this line.
var counter = 5
while(counter >= 0) {
    myArray.push(counter);
    counter--;
}

// for
var newArray = [];
for (let index = 0; index <= 5; index++) {
    newArray.push(index);    
}

var arr = [
    [1,2], [3,4], [5,6]
];

for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// dow-while
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);


// recursion
function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
}

// multiply(arr, n) == multiply(arr, n - 1) * arr[n]
function multiply2(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }


// Sample : Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  return "No such contact";
// Only change code above this line
}

function lookUpProfile2(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}


// if (contacts[x].hasOwnProperty(prop))  == if (prop in contacts[i])

// Change these values to test your function
lookUpProfile("Akira", "likes");

// Random

function ourRandomRange(ourMin, ourMax) {
   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}  
ourRandomRange(1, 9);


function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");

// The radix can be an integer between 2 and 36.
// parseInt(string, radix); 
// The radix can be an integer between 2 and 36.

function convertToInteger2(str) {
    return parseInt(str,2);
}

convertToInteger2("10011");

// # Use the Conditional (Ternary) Operator
// condition ? statement-if-true : statement-if-false;

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
};

function findGreater2(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

function findGreaterOrEqual2(a, b) {
    return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";
}

function findGreaterOrEqual3(a, b) {
   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}


// Samples

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


//Only change code below this line
function countdown(n){
    if(n < 1) {
      return [];
    }
    else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }  
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]


// Sample

function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {
        return [startNum];
      } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
      }
};
  





















