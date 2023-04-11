class CarBuilder {
  // Tu código aquí 👇
  constructor(year, model, brand, color, price, isAvailable) {
    this.year = year;
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
  }
  setYear(year){
    this.year = year;
    return this
  }
  setModel(model){ 
    this.model = model;
    return this
  }
  setBrand(brand){
    this.brand = brand;
    return this
  }
  setColor(color){ 
    this.color = color;
    return this
  }
  setPrice(price){
    this.price = price 
    return this
  }
  setIsAvailable(available){
    this.isAvailable = available 
    return this
  }
  build(){ 
    return {
      year: this.year,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      isAvailable: this.isAvailable
    }
  }
}

const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()