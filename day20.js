class Passenger {
  constructor(name, lastName, age) {
    // Tu código aquí 👈
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }
}
class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }
  sellTicket(passenger) {
    // Tu código aquí 👈
    if(this.capacity > 0){
      this.passengers.push({
        age: passenger.age,
        fullName: `${passenger.name} ${passenger.lastName}`
      });
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price,
      })
      this.capacity--;
      return new Reservation(this, passenger); // TOD: Retornar el objeto reservacion
    }
  }
}
class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price)
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      this.passengers.push({
        age: passenger.age,
        fullName: `${passenger.name} ${passenger.lastName}`
      });
      this.price = passenger.age < 18 || passenger.age > 65 ? this.price - (this.price * 0.2) : this.price;
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price
      })
      this.capacity--;
      return new Reservation(this, passenger);
    }
  }
}
class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price)
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      this.passengers.push({
        age: passenger.age,
        fullName: `${passenger.name} ${passenger.lastName}`
      });
      this.price += this.specialService;
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price
      })
      this.capacity--;
      return new Reservation(this, passenger);
    }
  }
}

class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
    // Tu código aquí 👈
  }

  reservationDetails() {
    // console.log('passenger', this.passenger);
    return {
      origin: this.flight.origin, 
      destination: this.flight.destination, 
      date : this.flight.date , 
      reservedBy: `${this.passenger.name} ${this.passenger.lastName}` 
    }
    // Tu código aquí 👈
  }
} 

const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights)