{
  /**
   * Type Assertion 💩
   */
  function jsStrFunc(): any {
    return 1;
  }
  const result = jsStrFunc();
  console.log((result as string).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const button = document.querySelector('class')!; // 정말 100% 상황일때만 !를 쓰면 됨
  if (button) {
    button.nodeValue;
  }
}
