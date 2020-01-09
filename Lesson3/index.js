// push() adds elements to the end of an array
// unshift() adds elements to the beginning of an array

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
console.log(romanNumerals);

romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals);

romanNumerals.push(twentyThree);
console.log(romanNumerals);




// *********************************
// pop() removes an element from the end of an array
// shift() removes an element from the beginning

let greetings = ['whats up?', 'hello', 'see ya!'];
console.log(greetings);

greetings.pop();
// now equals ['whats up?', 'hello']
console.log(greetings);

greetings.shift();
// now equals ['hello']
console.log(greetings);




// ************************************************
// splice() - remove any number of consecutive elements from anywhere in an array.

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']



let array2 = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array2.splice(3, 2);
// newArray equals ['really', 'happy']




