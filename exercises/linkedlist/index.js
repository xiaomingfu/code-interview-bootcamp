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
    this.head = new Node(data, this.head);
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
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return (this.head = null);
    }

    let previousNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      previousNode = nextNode;
      nextNode = nextNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    if (node) {
      while (counter < index) {
        node = node.next;
        counter++;
      }
      return node;
    }
    return null;
  }

  removeAt(index) {
    let node = this.getAt(index);

    if (node) {
      let previous = this.getAt(index - 1);
      if (node.next) {
        if (index === 0) {
          return (this.head = node.next);
        }

        return (previous.next = node.next);
      }
      previous.next = null;
    }
  }
}

module.exports = { Node, LinkedList };
