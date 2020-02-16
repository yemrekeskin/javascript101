function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function titleCaseV2(str) {
    var titled = str.toLowerCase().split(" ").map((elem) => {
        return elem[0].toUpperCase() + elem.slice(1);
    });
    return titled.join(" ");
}

console.log(titleCase("I'm am little tea pot"));
console.log(titleCaseV2("I'm am little tea pot"));