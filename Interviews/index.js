var myArr = ['a', 'b', 'c', 'd'];

// add methods
myArr.unshift('start'); // begins
myArr.push('end'); // ends

// remove methods
myArr.pop(); // ends
myArr.shift(); // begins


myArr = ["start", ...myArr, "end"];
myArr = [...myArr, "end"];
myArr = ["start", ...myArr];

console.log(myArr);


// How do you create a private varibale in Javascript ?

function secretVariable() {
    var private = "super secret code";

    return function () {
        return private;
    }
}

var getPrivateVariable = secretVariable();
console.log(getPrivateVariable());
// console.log(secretVariable());


// What is the output ?

var num = 4;
function outer() {
    var num = 2;
    function inner() {
        num++;
        var num = 3;
        console.log(num); // 3
    }
    inner();
}

outer();

// What is the output ?
console.log(typeof 1);
console.log(typeof (typeof 1));

// What is the output ?

var hero = {
    _name: 'YunusEmre',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stolenSecretIdentity = hero.getSecretIdentity;
var stolenSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stolenSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); // YunusEmre




