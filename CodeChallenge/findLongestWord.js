function findLongestWord(str) {
    // var words = str.split(' ');
    // var longest = "";

    // for (const word of words) {
    //     if (word.length > longest.length) {
    //         longest = word;
    //     }
    // }
    // return longest;

    // # version 1
    return str.split(' ').sort((a, b) => {
        return b.length - a.length;
    })[0];
}

console.log(findLongestWord('The wuick brown fax jumped over the lazy dog'));