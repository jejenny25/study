{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected - 상속받은 자식은 접근가능 외부는 접근 불가능
  class CoffeeMaker {
    private static BEANS_GRAMMS_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; //instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //constructor 사용안하고 만들래 ex) Math. -> 이럴때는 constructor를 private으로 해서 이 함수를 되도록 이용하도록 하는게 좋음
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be grater than 0');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(3);

  /**
   * Getter, Setter
   */
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        //에러
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
  console.log(user.fullName);
}
