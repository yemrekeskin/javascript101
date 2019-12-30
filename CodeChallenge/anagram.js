// Anagram is strings that Characters contains same length
// not sensitive and space
str1 = "aabbcc";
str2 = "bbccdd";

// remove punctuation
const clearStr = (str) => {
    return str.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
        .split('').sort().join();
}

const isAnagram = (str1, str2) => {
    // str1 = clearStr(str1);
    // str2 = clearStr(str2);

    // if(str1 === str2) {
    //     return true;
    // }
    // return false;

    return clearStr(str1) === clearStr(str2);
}

const generateCharMap = (str) => {
    charMap = {};
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        if (!charMap[ch]) {
            charMap[ch] = 1;
        } else {
            charMap[ch]++;
        }
    }
    return charMap;
}

const isAnagramV2 = (str1, str2) => {
    charMap1 = generateCharMap(str1);
    charMap2 = generateCharMap(str2);

    for (const key in charMap1) {
        if (charMap1.hasOwnProperty(key)) {
            const ch = charMap1[key];

            if (ch != charMap2[key]) {
                return false;
            }
        }
    }
    return true;
}

console.log(clearStr('asdfsd awef !*-0*'));
console.log(isAnagram('asdfgh', 'hgfdsa'));
console.log(isAnagramV2('asdfgh', 'hgfdsa'));