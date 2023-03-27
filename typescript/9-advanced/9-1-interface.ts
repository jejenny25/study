{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ⭐︎ 타입, 인터페이스 둘 다 오브젝트 구현가능
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ⭐︎ 타입, 인터페이스 둘 다 클래스 구현가능
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends ⭐︎
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  type ZpositionType = PositionType & { z: number };

  // 😝 Only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }
  // type PositionType{
  // }

  // 😝 Type aliases can use computed properies
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
