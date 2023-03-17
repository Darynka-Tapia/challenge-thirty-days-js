class User {
  // Tu código aquí 👈
  constructor(name, age, friends = [], messages = []){
    this._name = name;
    this._age = age;
    this._friends = friends;
    this._messages = messages;
  }
  addFriend(friend) {
    this._friends.push(friend)
  }
  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message)
  }
  showMessages() {
    return this._messages;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
}
