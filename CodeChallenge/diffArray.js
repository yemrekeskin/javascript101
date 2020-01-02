// let arr1 = [1,2,3,4];
// let arr2 = [1,2,4,5];

function mainDiff(arr1, arr2) {

    const resultArr = [];


    const diffArr = (arr1, arr2) => {
        for (const item of arr1) {
            if (arr2.indexOf(item) === -1) {
                resultArr.push(item);
            }
        }
        return resultArr;
    }

    diffArr(arr1, arr2);
    diffArr(arr2, arr1);

    return resultArr;
}

// birinci array ile ikinci array farkı
// const diffArr = (arr1, arr2) => {  
//     const resultArr = [];      
//     for (const item of arr1) {
//         if (arr2.indexOf(item) === -1) {
//             resultArr.push(item);
//         }
//     }
//     return resultArr;
// }

const diffArr = (arr1, arr2) => {
    return arr1.concat(arr2).filter(item => {
        return !arr1.includes(item) || !arr2.includes(item);
    })
}

const diffArrV2 = (arr1, arr2) => {
    return arr1.filter(d => !arr2.includes(d));
};

function mainDiffV2(arr1, arr2) {
    return [...diffArr(arr1, arr2), ...diffArr(arr2, arr1)];
}

// console.log(diffArr([1, 2, 3, 4], [1, 2, 4, 5]));
console.log(mainDiff([1, 2, 3, 4], [1, 2, 4, 5]));
console.log(diffArr([1, 2, 3, 4], [1, 2, 4, 5]));

console.log(mainDiffV2([1, 2, 3, 4], [1, 2, 4, 5]));
