{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptoional = Optional<Video>;
  const videoOp: VideoOptoional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: ReadOnly<Animal> = {
    name: 'dog',
    age: 12,
  };
  // animal.age = 123;
  // type VideoOptoional = {
  //   title?:string;
  //   author?:string;
  // }

  // type VideoReadOnly = {
  //   readonly title:string;
  //   readonly author:string;
  // }

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
