class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}
class MessagesProxy {
  constructor(messages, user) {
    // Tu código aquí 👈
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    // Tu código aquí 👈
    if(this.user.loggedIn) {
      this.messages.sendMessage(text);
    }else{
      throw new Error(`Usuario no registrado`)
    }
  }

  getHistory() { 
    // Tu código aquí 👈
    if(this.user.loggedIn) {
      return this.messages.getHistory();
    }else{
      throw new Error(`Usuario no registrado`)
    }
   }
}

class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
    this.loggedIn = false;
  }

  login() {
    // Tu código aquí 👈
    this.loggedIn = true;
  }

  logout() {
    // Tu código aquí 👈
    this.loggedIn = false;
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this.loggedIn;
  }
}


const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

messagesProxy.sendMessage("Hola")