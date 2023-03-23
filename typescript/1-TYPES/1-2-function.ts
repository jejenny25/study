{
  // // Javascript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript ✨
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript 💩
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript ✨
  // function fetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Javascript ✨ =>TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("steve", "Jobs");
  printName("Ellie");
  printName("Anna", undefined);

  // Default paraameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
