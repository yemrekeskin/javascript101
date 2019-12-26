
const isPalindrome = (str) => {
    // .toLowerCase()

    if(str.length === 0 || str.length === 1)  {
        return false;
    }

    reversed = str.split('').reverse().join('');    
    return reversed === str;
}

const isPalindrome2 = (str) => {    
    strArr = [...str];
    for (let ch of str) {
        if(ch !== strArr.pop()) {  // get last one in array with pop() func.
            return false;
        }
    }
    return true;
}

const isPalindrome3 = (str) => {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length-1 - i]) {
            return false;
        }        
    }
    return true;
}

const isPalindrome4 = (str) => {
    str = str.toLowerCase();
    return str.split('').every((elem,index) => {
        return elem === str[str.length - 1 - index];
    });
}

console.log(isPalindrome('abba'));
console.log(isPalindrome2('abba'));
console.log(isPalindrome3('abba'));
console.log(isPalindrome4('maam'));
console.log(isPalindrome('test'));

// console.log('abcde'.split(''));
// console.log([...'abba']);

