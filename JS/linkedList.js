class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  //Add First
  addFirst(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    this.length++;
  }
  //Add Last
  addLast(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  //Delete First
  deleteFirst() {
    if (this.head !== null) {
      if (this.head == this.last) {
        this.head = null;
        this.tail = null;
        return;
      }
      this.head = this.head.next;
    }
    this.length--;
  }
  //Delete Last
  deleteLast() {
    let previous = this.getPreviousNode(this.tail);
    this.tail = previous;
    this.tail.next = null;
    this.length--;
  }

  //Get Previous Node
  getPreviousNode(node) {
    let current = this.head;
    while (current !== null) {
      if (current.next == node) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  //Is List Empty
  isEmpty() {
    return this.head === null;
  }

  //Index of item
  indexOf(item) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data == item) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  //Contains
  contains(item) {
    return this.indexOf(item) !== -1;
  }

  //Size
  size() {
    return this.length;
  }

  //Convert to Array
  toArray() {
    let current = this.head;
    let tempArray = [];
    while (current !== null) {
      tempArray.push(current.data);
      current = current.next;
    }
    return tempArray;
  }
}

let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addFirst(0);
console.log(list.toArray());
