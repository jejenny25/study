/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type CalcType = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(calcType: CalcType, num1: number, num2: number) {
  // if (calcType === 'add') {
  //   return num1 + num2;
  // } else if (calcType === 'substract') {
  //   return num1 - num2;
  // } else if (calcType === 'multiply') {
  //   return num1 * num2;
  // } else if (calcType === 'divide') {
  //   return num1 / num2;
  // } else if (calcType === 'remainder') {
  //   return num1 % num2;
  // }

  switch (calcType) {
    case 'add':
      return num1 + num2;
    case 'substract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    case 'remainder':
      return num1 % num2;
    default:
      throw new Error('unknown calctype');
  }
}
