interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; // 다음 스택 노드를 가리키거나 안 가리킴
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {} // 자료구조를 만들때 어느정도의 사이즈를 할지 정함

  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      //null == undefined, null !== undefined
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('Ellie 1');
stack.push('Bob 2 ');
stack.push('Steve 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}
