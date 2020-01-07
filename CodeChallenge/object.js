
var Person = function (fullName) {

    var fullName = fullName;


    this.getFirstName = function () {
        return fullName.split(' ')[0];
    }

    this.setFirstName = function (newFirstName) {
        fullName = newFirstName + fullName.split(' ')[1];
    }

    this.getLastName = function () {
        return fullName.split(' ')[1];
    }

    this.setLastName = function (newLastName) {
        fullName = fullName.split(' ')[0] + newLastName;
    }


    this.getFullName = function () {
        return fullName;
    }

    this.setFullName = function (newName) {
        fullName = newName;
    }

}

var bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());


