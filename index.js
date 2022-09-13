const Genus = require('./Genus');


class Animal extends Genus {
  constructor(name, sound) {
    super(4, true);
    this.name = name;
    this.sound = sound;
  }
  increaseLegs(num) {
    this.legs += num;
  }
}

const bear = new Animal('bear', 'grrr');

bear.increaseLegs(7);

console.log(bear);


















// // const inquirer = require('inquirer'); // {}

// // inquirer.prompt();




// // const arr = [5, 10, 15];

// // function add(a, b) {
// //   const sum = a + b;
// //   return sum;
// // }

// // const summed = add(2, 5);

// // console.log(summed);

// // function Animal(name, sound) {
// //   this.name = name;
// //   this.sound = sound;
// // }

// // Animal.prototype.printName = function () {
// //   console.log(this.name);
// // }

// // const fox = new Animal('fox', 'screech');





// const cat = new Animal('cat', 'meow');

// cat.printName();
// cat.printSound();
// // console.log(cat);

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
// }

// const jd = new User('jd@test.com', 'password');
// const jeremiah = new User('jeremiah@test.com', 'password');


// // const jd = {
// //   email: 'jd@test.com',
// //   password: 'password'
// // };

// // const jeremiah = {
// //   email: 'jeremiah@test.com',
// //   password: 'password'
// // }