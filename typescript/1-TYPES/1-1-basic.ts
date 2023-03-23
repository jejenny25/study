{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null, undefine
   * Object: function, array....
   */

  //number
  const num: number = 1.5;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; //💩
  let age: number | undefined; //옵셔널 타입일 때
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; //💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void 함수에서 어떤것을 리턴하지 않을 때. 생략가능
  function print() {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  //never
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {} //Unreachable
  }
  let neverEnding: never; // 💩

  // object 광범위함. 아무거나 받을 수 있음.
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "jeje" });
  acceptSomeObject({ animal: "dog" });
}
