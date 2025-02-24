class SingleNode<T> {
   public value: T;
   public next : SingleNode<T> | null = null;
   

   constructor(value: T){
    this.value = value;
   }
}

class LinkedList<T>{
    private head: SingleNode<T> | null = null;

   public append(value: T) : void{
    const newNode = new SingleNode(value);
    if(this.head == null){
        this.head = newNode;
    }else{
        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
    }
   }
   public print(): void{
    let current = this.head;
    while(current !== null){
        console.log(current.value);
        current = current.next;
    }
   }
   
}

const newList = new LinkedList<number>()
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
newList.print();