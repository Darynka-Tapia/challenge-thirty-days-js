class Car {
    // Tu código aquí 👈
    constructor(
        brand,
        model,
        year,
        mileage, 
        state = false
    ){
       this.brand = brand;
       this.model = model;
       this.year = year;
       this.mileage = mileage;
       this.state = state;
    }
    turnOn() {
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
    drive(kilometers){
        if (this.state) {
            this.mileage += kilometers;
        }else{
            throw new Error("El auto está apagado")
        }
    }
}

const toyota = new Car("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.turnOff();

toyota.drive(100);
console.log(toyota.mileage)
