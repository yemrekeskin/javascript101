
const capitalize = (str) => {
    var capitalizedArr = [];

    for(let sentence of str.split(' ')) {
        capitalizedArr.push(sentence[0].toUpperCase() + sentence.slice(1));
    }
    return capitalizedArr.join(' ');
}

const capitalizeStr = (str) => {
    return str.split(' ').reduce((result,item) => {
        result += item[0].toUpperCase() + item.slice(1);
        return result;
    }, "");

    // return str.split(' ').reduce((result,item) => {
    //     return result + item[0].toUpperCase() + item.slice(1);
    // }, ""); // result default value ""
}

// slice --> kaydır
console.log('emre'.slice(1));
console.log(capitalize('yunus emre keskin'));
console.log(capitalizeStr('yunus emre keskin'));
