class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

class LinkedListRecharged extends LinkedList {
  constructor(){
    super();
  }
  get(index){
    // Tu código aquí 👈
    if(index < 0 || index >= this.length) return null
    let cont = 0;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if( i === 0 && index === 0){
        return currentNode.value;
      }else{
       cont++;
       currentNode = currentNode.next;
       if(cont === index) return currentNode.value;
      }
    }
   return null ;
  }

  insertAt(index, value){
    if(index < 0 || index >= this.length) return null

    const newNode = new Node(value)
    if (index === 0) {
      newNode.next = this.head 
      this.head = newNode
      if(!this.tail){
        this.tail = newNode
      }
      this.length++

      return newNode
    }
    let currentNode = this.head
    for(let i = 0; i < index - 1; i++){
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode    

    if(!newNode.next){
      this.tail = newNode
    }

    this.length++
    return newNode
  }

  toArray(){
    // Tu código aquí 👈
    let cont = 0;
    let currentNode = this.head;
    let currentNodeArray = [];
    for (let i = 0; i < this.length; i++) {
      if( i === 0){
        currentNodeArray.push(currentNode.value)
      } else {
       cont++;
       currentNode = currentNode.next;
       currentNodeArray.push(currentNode.value)
      }
    }
    return currentNodeArray;
  }

  removeAt(index){
    // Tu código aquí 👈
    if(index < 0 || index >= this.length) return null
    let deletedNode = null

    if(index === 0){
      deletedNode = this.head
      this.head = this.head.next
      this.tail = this.length === 1 && null
      this.length--
      return deletedNode.value
    }

    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }
    
    deletedNode = currentNode.next
    currentNode.next = currentNode.next.next

    this.tail = !currentNode.next && currentNode
    this.length--
    return deletedNode.value
  }
}


// El método append ya se encuentra implementado por lo que no debes preocuparte
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

console.log(linkedList.toArray())
