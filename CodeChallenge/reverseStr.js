
// CHALLENGE --> 1

const reverseFn = str => {
    // return str.split(''); 
    // return str.split('').reverse();
    return str.split('').reverse().join('');
}

function reverseFn1(str) {
    return str.split('').reverse().join('');
}

const reverseFn2 = (str) => {
    reversed = '';
    for (const ch of str) {
        reversed = ch + reversed;
    }
    return reversed;
}

function reverseString(str) {
    var final = "";
    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        // console.log(element);
        final += element;
    }
    return final;
}

console.log(reverseString('hello'));

// console.log(reverseFn2('yunusemrekeskin'));

