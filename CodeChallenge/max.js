
const findMaxCh = str => {
    
    var charMap = {}, max = 0, maxChar = '';

    for (const ch of str) {
        if(!charMap[ch]) {
            charMap[ch] = 1;
        } else {
            charMap[ch]++;
        }
    }

    for (const key in charMap) {
        if (charMap.hasOwnProperty(key)) {
            const element = charMap[key];
            if(element > max) {
                max = element;
                maxChar = key;
            }
        }
    }
    return maxChar;
}

console.log(findMaxCh('yunusemrekeskin'));

