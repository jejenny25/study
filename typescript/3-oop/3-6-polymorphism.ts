{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMMS_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; //instance(object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      //constructor 사용안하고 만들래 ex) Math. -> 이럴때는 constructor를 private으로 해서 이 함수를 되도록 이용하도록 하는게 좋음
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be grater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧽');
    }
    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMMS_PER_SHOT) {
        // 내 클래스 안에 있는 멤버 변수에 접근할 때는 this.를 붙일것
        throw new Error('Not enough coffe beans!');
      }
      console.log(`grainding beans for ${shots}`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMMS_PER_SHOT;
    }

    private preheat() {
      console.log('heaing up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ...☕`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    //자식 클래스에서 부모 클래스 수정-> 오버라이팅
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'dd'),
    new SweetCoffeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'dd'),
    new SweetCoffeMaker(16),
  ];
  machines.forEach((machines) => {
    console.log('----------------------------');
    machines.makeCoffee(1);
  });
}
