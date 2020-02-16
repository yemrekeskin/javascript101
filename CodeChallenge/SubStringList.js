const substringList = (str) => {
    var result = [];

    for (let i = 1; i < str.length; i++) {

        for (let j = 0; j <= str.length - i; j++) {

            var subset = str.substring(j, i);
            if (subset !== '') {
                result.push(subset);
            }
        }
    }

    return result;
}

console.log(substringList('yunus'));