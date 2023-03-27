{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    value: string;
    next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size = 0;
    private head?: StackNode;

    get size() {
      return this._size;
    }
    push(value: string): void {
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

  const stack = new StackImpl();
  stack.push('jeje1');
  stack.push('jeje1');
  stack.push('jeje3');
  stack.pop();
  console.log(stack);
}
