// 3  -> 'fizz'
// 5  -> 'buzz'
// 15 -> 'fizzbuzz'


const fizzBuzz = () => {
    for (let i = 0; i < 100; i++) {
        if(i % 15 === 0) { // if priority is important in here
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else if(i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}


const fizzBuzzV2 = () => {
    var str = '';
    for (let i = 0; i < 100; i++) {
        if(i % 3 === 0) {
            str += 'fizz';
        } 
        
        if(i % 5 === 0) {
            str += 'buzz';
        } 

        if(i % 3 !== 0 && 
           i % 5 !== 0) 
        {
            str += i;
        }

        str += '\n';
    }
}

fizzBuzz();
