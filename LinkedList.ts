import { ISortable } from "./interface";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList implements ISortable {
  head: Node | null = null;
  length: number = 0;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      this.length++;
    }
    tail.next = node;
  }

  // Should return number of Nodes in List
  getLength(): number {
    return this.length;
  }

  // Convenience method that returns a Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.at(leftPos).data > this.at(rightPos).data;
  }

  swap(leftPos: number, rightPos: number): void {
    if (leftPos === rightPos) return;

    let leftNode = this.at(leftPos);
    let rightNode = this.at(rightPos);
    let temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
