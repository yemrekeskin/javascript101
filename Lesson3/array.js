
// SPLIT - JOIN

var myArr = [1, 2, 3, 4];

var name = "YunusEmreKeskin";
var names = name.split('');

console.log(names);

// console.log(names.join()); // default separator ,
console.log(names.join(''));


// FILTER - FIND

var products = [
    { name: "iphone", price: 800 },
    { name: "sony", price: 800 },
    { name: "samsung", price: 200 }
]

var expensiveProducts = products.filter((p) => {
    // callback function -> returns true or false
    // if (p.price > 600) return true;
    // else return false;
    return p.price > 600;
});

console.log(expensiveProducts);

var iphone = products.find((d) => {
    // return d.name === 'iphone'
    return d.price === 800; // return first record
});

console.log(iphone);

