function repeatStringNumTimes(str, num) {
    if (num < 0) return "";
    return str.repeat(num);
}

function repeatStringNumTimesV2(str, num) {
    var final = "";
    if (num < 0) return "";
    for (let i = 0; i < num; i++) {
        final += str;
    }
    return final;
}

function repeatStringNumTimesV3(str, num) {

    if (num < 0) return "";

    if (num === 1) return str;

    return str + repeatStringNumTimesV3(str, num - 1);
}

console.log(repeatStringNumTimesV3('abcd', 23));

