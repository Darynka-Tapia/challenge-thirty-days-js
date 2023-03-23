class Animal {
  // Tu código aquí 👈
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie
    }
  }
}

class Mammal extends Animal{
  // Tu código aquí 👈
  constructor(name, age, specie, hasFur){
    super(name, age, specie)
    this.hasFur = hasFur;
  }
  getInfo() {
    return {
      ...super.getInfo(),
      hasFur: this.hasFur
    }
  }
}

class Dog extends Mammal{
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur){
    super(name, age, 'dog', hasFur)
    this.breed = breed;
  }
  getInfo() {
    return {
      ...super.getInfo(),
      breed: this.breed
    }
  }
  bark() {
    return "woof!"
  }
}
const bird = new Animal("pepe", 1, "bird")
const hippo = new Mammal("bartolo", 3, "hippo", false)
const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark())
console.log(dog.getInfo())
