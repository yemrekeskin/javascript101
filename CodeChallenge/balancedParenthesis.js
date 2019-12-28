// balancedParenthesis.js
// {([])}

// ( --> Add stack
// [ --> Add Stack

// STACK Last In First Out

const isBalanced = str => {

    var stack = [];
    var map  = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if(element === '{' || element === '[' || element === '(') {
            stack.push(element);
        } else {
            var last = stack.pop(); // get last one
            if(map[last] !== element) {
                return false;
            }
        }        
    }
    return Boolean(stack.length) ? false : true;
}

const isBalancedv2 = str => {
    return !str.split('').reduce((counter,item) => {
        if(item === '{' || item === '[' || item === '(') {
            return ++counter;
        } else {
            return --counter;
        }
    },0);
}

console.log([1,2,3,4].reduce((sum,item) => {
    sum += item;
    return sum; 
}));

console.log(isBalanced('()['));
console.log(isBalanced('()[]'));
console.log(isBalanced('(({[]}))'));

console.log(isBalancedv2('()['));
console.log(isBalancedv2('()[]'));
console.log(isBalancedv2('(({[]}))'));


