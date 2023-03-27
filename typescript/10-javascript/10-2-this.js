console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };

  // increase = () => {
  //   console.log(this);
  // };
}

const counter = new Counter();
counter.increase();
//const caller = counter.increase;
/**
 * javascript에서 this란 부르는 문맥에 따라 변경이 될 수 있으므로 한 곳으로 연결하고 싶다면 bind를 사용해서 연결해줘야함
 * 아니면 arrow 함수를 이용하면됨
 */
const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
