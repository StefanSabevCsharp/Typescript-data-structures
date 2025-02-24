"use strict";
class SingleNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new SingleNode(value);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const newList = new LinkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
newList.print();
