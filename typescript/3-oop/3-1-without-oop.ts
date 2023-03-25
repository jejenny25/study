{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMMS_PER_SHOT = 7;
  let coffeeBeans: number = 0;
  function makeCoffe(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMMS_PER_SHOT) {
      throw new Error('Not enough coffe beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMMS_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMMS_PER_SHOT;
  const coffee = makeCoffe(2);
  console.log(coffee);
}
