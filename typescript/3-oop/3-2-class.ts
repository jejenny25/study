{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 클래스는 관련된 속성과 함수를 묶어서 어떤 모양의 데이터가 될 것이라는 것을 정의
   * 정의된 클래스를 이용해서 실제로 데이터를 넣어서 오브젝트를 만들 수 있음
   */
  class CoffeeMaker {
    static BEANS_GRAMMS_PER_SHOT = 7; // class level
    coffeeBeans: number = 0; //instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //constructor 사용안하고 만들래 ex) Math.
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMMS_PER_SHOT) {
        // 내 클래스 안에 있는 멤버 변수에 접근할 때는 this.를 붙일것
        throw new Error('Not enough coffe beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMMS_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);
  //maker.makeCoffe(2);

  const maker3 = CoffeeMaker.makeMachine(2);
}
