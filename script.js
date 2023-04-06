// Q #1

// let user = {
//   name: "John",
//   age: 30,
// };

// function sayHello() {
//   alert(`Hello ${this.name}`);
// }

// user["sayHello"] = sayHello;
// user.sayHello();

// user.sayHello();
//--------------------------------------------------------
//Q #2

// const countStep = {
//   step: 0,
//   increase() {
//     this.step++;
//     // console.log(this.step);
//     return this;
//   },
//   decrease() {
//     // if (this.step != 0) {
//     //   this.step--;
//     // }
//     this.step && this.step--;
//     // this.step--;
//     // console.log(this.step--);
//     return this;
//   },
//   reset() {
//     this.step = 0;
//     // console.log((this.step = 0));
//     return this;
//   },
//   read() {
//     // this.step;
//     console.log(this.step);
//     return this;
//   },
// };

// countStep.increase().increase().read().decrease().read().reset();
// countStep.decrease();
// countStep.reset();
// countStep.read();

//----------------
// Q #3

// const employees = [];
// const employee = [
//   { name: "Majid", age: 32, retiredate: "March 12, 2014" },
//   { name: "Ali", age: 17, retiredate: "June 2, 2023" },
//   { name: "Hamed", age: 58, retiredate: "December 20, 2036" },
//   { name: "Navid", age: 62, retiredate: "April 30, 2020" },
// ];

// const user = employee.sort(function (a, b) {
//   return a.age - b.age;
// });

// console.log(user);
//--------------------------------------------------------
// Q #5

// let ask = (question) => {
//   confirm(question)
//     ? alert("You agreed.")
//     : alert("You canceled the execution.");
// };
// ask("Do You Agree?");

//--------------------------------------------------------

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );
