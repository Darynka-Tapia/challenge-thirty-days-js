class Node {
  constructor(name, age, bedNumber) {
    // Tu código aquí 👈🏻
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}
class PatientList {
  constructor(beds) {
    // Tu código aquí 👈🏻
    this.beds = beds;
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.availableBeds = beds;
    this.availableBedsArray = [];
    for (let i = 1; i <= beds; i++) {
      this.availableBedsArray.push(i);
    }
  }

  addPatient(name, age) {
    // Tu código aquí 👈🏻
    console.log('availableBedsArray', this.availableBedsArray);

    if(this.availableBedsArray.length === 0){
      throw new Error(`No hay camas disponibles`)
    };

    const newNode = new Node(name, age, this.availableBedsArray[0]);
    this.availableBedsArray.shift();

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.availableBeds--;
  }

  removePatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) {
      return null;
    }
    if (this.head.name === name) {
      this.availableBedsArray.push(this.head.bedNumber);
      this.head = this.head.next;
      this.length--;
      this.availableBeds--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        this.availableBedsArray.push(this.head.bedNumber);
        currentNode.next = currentNode.next.next;
        this.length--;
        this.availableBeds--;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  getPatient(name) {
    // Tu código aquí 👈🏻
    let currentNode = this.head;
    let findPatient = false;
    for (let i = 0; i < this.length; i++) {
      if( i === 0 && currentNode?.name === name){
        findPatient = true;
        return {
          name: currentNode.name, 
          age: currentNode.age,
          bedNumber: currentNode.bedNumber,
        };
      }else{
       currentNode = currentNode.next;
       if(currentNode?.name === name){
        findPatient = true;
        return {
          name: currentNode.name, 
          age: currentNode.age,
          bedNumber: currentNode.bedNumber,
        };
       }
      }
    }
    if( !findPatient ){
      throw new Error("Paciente no encontrado")
    }
    return null ;
  }

  getPatientList() {
    // Tu código aquí 👈🏻
    let currentNode = this.head;
    let currentNodeArray = [];
    for (let i = 0; i < this.length; i++) {
      if( i === 0){
        currentNodeArray.push({
          name: currentNode.name, 
          age: currentNode.age,
          bedNumber: currentNode.bedNumber,
        });
      } else {
        currentNode = currentNode.next;
        currentNodeArray.push({
          name: currentNode.name, 
          age: currentNode.age,
          bedNumber: currentNode.bedNumber,
        })
      }
    }
    return currentNodeArray;
  }

  getAvailableBeds() {
    // Tu código aquí 👈🏻
    return this.availableBedsArray.length;
  }
}

const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 30)
// list.addPatient("Paciente 4", 30) //No debe de agregarse este 

console.log('lista: ',list.getPatientList());

console.log('get1', list.getPatient("Paciente 0"));

/*const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 30)

list.removePatient("Paciente 1");


list.addPatient("Paciente 4, cama 1", 30)

console.log(list.getPatientList())*/
