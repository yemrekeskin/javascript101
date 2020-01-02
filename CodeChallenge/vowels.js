
const findVowels = (str) => {
    var counter = 0;
    for (const ch of str.toLowerCase()) {
        if('aeiou'.includes(ch)) {
            counter++;    
        }
    }
    return counter;
}

const findVowelsV2 = (str) => {
    return (str.split('').filter(d => 'aeiou'.includes(d))).length;
}

const findVowelsV3 = (str) => {
    return str.split('').reduce((total, elem) => {
        if('aeiou'.includes(elem)) {
            total++;    
        }
        return total;
    },0);
}

const findVowelsV4 = (str) => {
    const matches = str.match(/[aeiou]/ig);
    // i büyük harfe duyarlılık , g iterasyona devam et
    return matches ? matches.length : 0;
}

console.log(findVowels('Yunus Emre Keskin'));
console.log(findVowelsV2('Yunus Emre Keskin'));
console.log(findVowelsV3('Yunus Emre Keskin'));
console.log(findVowelsV3('Yunus Emre Keskin'));

console.log('Yunus Emre Keskin');


