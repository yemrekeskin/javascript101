
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

console.log(reverseFn2('yunusemrekeskin'));

