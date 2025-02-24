class DoublyNode<T>{
    public value: T;
    public next: DoublyNode<T> | null = null;
    public prev: DoublyNode<T> | null = null;

    constructor(value: T ){
        this.value = value;
    }

}

class DoublyLinkedList<T> {
    private head: DoublyNode<T> | null = null;
    private tail: DoublyNode<T> | null = null;

    public append(value: T){
       const newNode = new DoublyNode(value)
       if(this.tail == null){
        this.head = newNode;
        this.tail == newNode;
       }else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
       }
    }

    public printForward(): void{
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    public printBackward(): void{
        let current = this.tail;
        while(current !== null){
            console.log(current.value);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.printForward(); 
list.printBackward(); 