"use strict";
class DoubleNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new DoubleNode(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    printForward() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    printBackward() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.value);
            current = current.prev;
        }
    }
}
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printForward();
list.printBackward();
