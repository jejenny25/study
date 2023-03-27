const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);
console.clear();
function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log('making coffee...☕');
  // };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making coffee...☕');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteeMachine(milk) {
  this.milk = milk;
}
LatteeMachine.prototype = Object.create(CoffeeMachine);
const latteeMachine = new LatteeMachine(123);
console.log(latteeMachine);
latteeMachine.makeCoffee();

//프로토타입이란 자바스크립트에서 객체지향프로그래밍(상속)을 하기위해 쓰이는 것이다. 코드를 재사용할 수 있다.
