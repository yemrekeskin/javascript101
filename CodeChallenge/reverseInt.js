
const reverseInt = (num) => {
    
    // 500 --> 5
    // 50 --> 5
    // 5 --> 5
    // while(num % 10 === 0) {
    //     num = num / 10
    // }
    // parseInt fonksiyonu 0025 --> 25


    let numArr = [...num.toString()]
    // let numArr2 = num.toString().split('')
    numArr = numArr.reverse().join('');
    numArr = parseInt(numArr);
    return Math.sign(num) * numArr;
}


console.log(reverseInt(25) === 52);
console.log(reverseInt(-52) === -25);
console.log(reverseInt(50) === 5);

