class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity)
  }
  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito"`
  }
}

class Service extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity)
  }
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`
  }
}

class Cart {
  // Tu código aquí 👈
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    product.addToCart()
    this.products.push(product)
  }
  deleteProduct(product) {
    const index = this.products.findIndex((item) =>
      item.name === product.name &&
      item.price === product.price &&
      item.quantity === product.quantity

    )
    this.products.splice(index, 1)
  }
  calculateTotal(){
    return this.products.reduce((acumulador, numero) => (acumulador + (numero.price * numero.quantity)), 0);
  }
}



const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
console.log('agregando',cart.addProduct(book));
console.log('agregando',cart.addProduct(course));
console.log('eliminar',cart.deleteProduct(book));
console.log('total',cart.calculateTotal());


