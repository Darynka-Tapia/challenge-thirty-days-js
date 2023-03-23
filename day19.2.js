function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity)
} 

class Pay {
  makePay(cantidadAPagar) {
    return {
      realized: true,
      quantity: cantidadAPagar
    }
  }
}

class PayPal extends Pay{
  constructor(email) {
    super();
    this.email = email;
  }
  makePay(cantidadAPagar) {
    return {
      ...super.makePay(cantidadAPagar),
      platform: "PayPal",
      email: this.email
    }
  }
}
class Card extends Pay{
  constructor(tarjeta) {
    super();
    this.tarjeta = tarjeta;
  }
  makePay(cantidadAPagar) {
    if(this.tarjeta.length === 16) {
    return {
        ...super.makePay(cantidadAPagar),
        lastCardNumbers: this.tarjeta.substring(this.tarjeta.length - 4)
      }
    }else{
      throw new Error(`Deben de ser 16 digitos`)
    }
  }
}
class Cash extends Pay{
  makePay(cantidadAPagar) {
    return {
      ...super.makePay(cantidadAPagar)
    }
  }
}

/*const card = new Card("4913478952471122")

processPay(card, 100)

const paypal = new PayPal("test@mail.com")

processPay(paypal, 240)*/
const cash = new Cash()

processPay(cash, 400)