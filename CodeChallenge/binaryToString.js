
function binaryToStr(bits) {

    let result = '';

    bitArray = bits.split(' ');
    bitArray.map(item => {
        result += String.fromCharCode(parseInt(item, 2));
        return result;
    });

    return result;
}


console.log(binaryToStr("01000001 01000001 01000001 01000001"));

// String.fromCharCode()

console.log(parseInt('01000001', 2));
console.log(String.fromCharCode(parseInt('01000001', 2)));

