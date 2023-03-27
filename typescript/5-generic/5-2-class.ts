{
  // either :a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftVal: L, private rightVal: R) {}
    left(): L {
      return this.leftVal;
    }
    right(): R {
      return this.rightVal;
    }
  }

  const either: Either<number, number> = new SimpleEither(4, 5);
  either.left(); //4
  either.right(); //5
  const best = new SimpleEither({ name: 'ellie' }, 'hello');
}
