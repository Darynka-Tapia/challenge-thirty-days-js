class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  constructor() {
    this.users = [];
    if (!Chat.instance) {
      this.name = 'Chat';
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }
  addUser(user){
    if( user instanceof  User){
      this.users.push(user);
    }
  }
  sendMessage(message){
    this.users.forEach(user => user.receiveMessage(message));
  }
  removeUser(name){
    const index = this.users.findIndex((user) => user === name);
    this.users.splice(index, 1)
  }
}

const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2)