// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (this.head) {
    //   this.head = this.head.next;
    // }
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }
    // if (!this.head.next) {
    //   return (this.head = null);
    // }
    // let previousNode = this.head;
    // let nextNode = this.head.next;
    // while (nextNode.next) {
    //   previousNode = nextNode;
    //   nextNode = nextNode.next;
    // }
    // previousNode.next = null;
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // const last = this.getLast();
    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size());
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    //     const node = new Node(data);
    //     if (!this.head) {
    //       return (this.head = node);
    //     }
    //     let dummyHead = this.head;
    //     if (index === 0) {
    //       this.head = node;
    //       return (this.head.next = dummyHead);
    //     }
    //     const previous = this.getAt(index - 1);

    //     if (!previous || !previous.next) {
    //       while (dummyHead.next) {
    //         dummyHead = dummyHead.next;
    //       }
    //       return (dummyHead.next = node);
    //     }
    //     node.next = previous.next;
    //     previous.next = node;

    if (!this.head) {
      return (this.head = new Node(data));
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }
}

module.exports = { Node, LinkedList };
