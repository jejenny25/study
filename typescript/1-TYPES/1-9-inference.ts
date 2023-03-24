{
  /**
   * Type Inference 타입을 추론한다.
   */
  let text = 'hello';
  function print(message) {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
