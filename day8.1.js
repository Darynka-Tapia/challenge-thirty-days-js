function createCalculator() {
  // Tu código aquí 👈
  let total = 0;
  const add = (valor) => total += valor; 
  const subtract = (valor)  => total -= valor;
  const multiply = (valor)  => total *= valor;
  const divide = (valor) => total /= valor;
  const clear = () => total = 0;
  const getTotal = () => total; 
  
  return {
    add, 
    subtract,
    multiply,
    divide,
    clear,
    getTotal
  }
}

//const calculator = createCalculator()
//console.log(calculator.add(10))

const calculator = createCalculator()
console.log(calculator.add(10))
console.log(calculator.subtract(-10))
