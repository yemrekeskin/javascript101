
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

const nthPrime = num => {
    var counter = 0;
    var value = 0;

    for (let i = 2; i < 1000; i++) {
        if(isPrime(i)) {
            counter += 1;
        }

        if(counter === num) {
            value = i;
            break;
        }   
    }
    return value;  
}

var result = nthPrime(6) === 13
// console.log(result);

console.log(nthPrime(1));



