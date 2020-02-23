function slasher(arr, howMany) {
    return arr.splice(0, howMany);
}

// var arr = ["a", "b", "c", "d"];
// arr.slice(0, 2);
// console.log(arr);


var arr = ["a", "b", "c", "d"];
// arr.splice(0, 2);
// console.log(arr);

slasher(arr, 2);
console.log(arr);
