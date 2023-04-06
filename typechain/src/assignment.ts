// 1.
type Last = <T>(a: T[]) => T;
const last: Last = (arr) => arr[arr.length - 1];
console.log(last(['1', '2', '3', 'last one']));

//2.
type Prepend = <T>(a: T[], b: T) => T[];
const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};
console.log(prepend(['1', '2', '3'], 'add one'));

// 3. mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = <T>(a: T[], b: T[]) => T[];
const mix: Mix = (arr1, arr2) => arr1.concat(arr2);
console.log(mix(['1', '2', '3'], ['one', 'two', 'three']));

// 4. count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = <T>(a: T[], b: T[]) => number;
const count: Count = (arr1, arr2) => arr1.length + arr2.length;
console.log(count(['1', '2', '3', '4'], ['one', 'two', 'three']));

// 5. findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
//    존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = <T>(a: T[], b: T) => number | null;
const findIndex: FindIndex = (arr, item) =>
  arr.indexOf(item) !== -1 ? arr.indexOf(item) : null;
console.log(findIndex(['dog', 'cat', 'bird', 'lion'], 'bird'));

// 6. slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex,
//    세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다.
//    이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = <T>(a: T[], b: number, c?: number) => T[];
const slice: Slice = (arr, startIndex, endIndex) =>
  arr.slice(startIndex, endIndex);
console.log(slice(['dog', 'cat', 'bird', 'lion'], 3));
