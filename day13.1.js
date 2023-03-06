function groupProducts(products, category) {
    // Tu código aquí
    const productsCategory = products.filter((product) => product.category === category)
    const productsName = productsCategory.map((product) => product.name)
    const productsSum = productsCategory.reduce((acumulador, numero) => (acumulador + numero.price), 0);
    return {
        products: productsName.join(', '), 
        totalPrice: productsSum
    }
}


const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
  ];
  
  console.log(groupProducts(products, "Electronics"))
  