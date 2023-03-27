//import sum, { print as printMessage } from './10-3-module1.js'; // default가 아닌 것은 동일한 이름으로 가져와야함 or as로 다르게 가져와야함
import * as calc from './10-3-module1.js';
console.log(calc.add(1, 5));

calc.print();
calc.number;
