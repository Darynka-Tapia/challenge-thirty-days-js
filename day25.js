class MyArray {
  constructor() {
    // Tu código aquí 👈
    this.data = {};
    this.length = 0
  }

  map(func) {
    // Tu código aquí 👈
    let newData = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newData.push(func(this.data[i]));
    }
    return newData;
  }

  filter(func) {
    // Tu código aquí 👈
    let newData = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this.data[i])) {
        newData.push(this.data[i])
      }
    }
    return newData;
  }

  push(item) {
    // Tu código aquí 👈
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    // Tu código aquí 👈
    const removed = this.data[(this.length-1)];
    delete this.data[(this.length-1)]; 
    this.length--
    return removed;
  }

  join(character = ",") {
    // Tu código aquí 👈
    let cadena = '';
    for(let i = 0;  i < this.length; i++){
      cadena += `${this.data[i]}`;
      cadena+= (i === (this.length - 1)) ? '' : `${character}`;
    }
    return cadena;
  }

  shift() {
    // Tu código aquí 👈
    // elimina el indice 0 y recorre los demas elementos
    const dataCoppy = { ...this.data }
    const removed = this.data[0];
    this.data = {};
    for (let i = 0; i < (this.length-1); i++) {
      this.data[i] = dataCoppy[i+1];
      console.log(i, i+1, (this.length-1))
    }
    this.length--;
    return removed;
  }

  unshift(item) {
    // Tu código aquí 👈
    if (typeof item === 'undefined') return this.length;
    const dataCoppy = { ...this.data }
    for(let i = 0;  i < this.length; i++){
      this.data[i+1] = dataCoppy[i];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
}


const myArray = new MyArray()

myArray.push('Platzinauta1');
myArray.push('Manzana');
myArray.push('Platzinauta3');
///console.log(myArray.unshift("Hola!"));

console.log(myArray.pop())
console.log(myArray.data)

