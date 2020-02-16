
// 185 = 1+8+5
// 14 = 1 + 4 
// 5

// V0
// const CollectDigit = (number) => {
//     var sum = 0;
//     var NumberArr = number.toString().split('');

//     for (let i = 0; i < NumberArr.length; i++) {
//         const element = parseInt(NumberArr[i]);
//         sum += element;
//     }

//     if (sum < 10)
//         return sum;
//     else return CollectDigit(sum);
// }

// V2

// const CollectDigit = (number) => {
//     var result = (number + '')
//         .split('')
//         .map(d => parseInt(d))
//         .reduce((acc, c) => {
//             return acc + c;
//         }, 0);

//     return result < 10 ? result : CollectDigit(result);
// }

const CollectDigit = (number) => {
    return ((number - 1) % 9) + 1;
}


var result = CollectDigit(81);
console.log(result);


var result = CollectDigit(185);
console.log(result);
