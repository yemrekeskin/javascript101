
const findMissing = (str) => {
    let missing = '';

    // str.split('').map((letter, index) => {
    //     if (str.charCodeAt(index) - str.charCodeAt(index - 1) > 1) {
    //         missing = String.fromCharCode(str.charCodeAt(index - 1) + 1);
    //         return missing;
    //     }
    // });

    for (let index = 0; index < str.length; index++) {

        if (str.charCodeAt(index) - str.charCodeAt(index - 1) > 1) {
            missing = String.fromCharCode(str.charCodeAt(index - 1) + 1);
            return missing;
        }
    }

    return missing;
};

console.log(findMissing("bcdf"));

// str.charCodeAt(0);
