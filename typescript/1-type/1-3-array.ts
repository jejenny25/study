{
  //Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // Tuple을 사용한 유용한 예> React의 useState
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
