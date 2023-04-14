class ContactList {
  constructor(size) {
    // Tu código aquí 👈
    this.contacts = new Array(size);
    this.numContacts = this.contacts.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numContacts;
  }

  insert(name, phone) {
    // Tu código aquí 👈
    const index = this.hash(name);
    if (!this.contacts[index]){
      this.contacts[index] = [];
    }
    this.contacts[index].push([name,phone]);
  }

  get(name) {
    let index = this.hash(name);
    if (!this.contacts[index]) return null
		
    for (let i = 0; i < this.contacts[index].length; i++) {
      if (this.contacts[index][i][0] === name) {
        return this.contacts[index][i][1];
      }
    }
  }

  retrieveAll() {
    // Tu código aquí 👈
    let allValues = [];
    for (let i = 0; i < this.numContacts; i++) {
      if (this.contacts[i]) {
        for (let j = 0; j < this.contacts[i].length; j++) {
          allValues.push(this.contacts[i][j]);
				}
			}
		}
		// Para finalmente retornarlo.
		return allValues;
  }

  delete(name) {
    // Tu código aquí 👈
    let index = this.hash(name);
    if (!this.contacts[index]) return null
		
    for (let i = 0; i < this.contacts[index].length; i++) {
      this.contacts[index].splice(i, 1);
    }
  }
}


/*
const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

console.log(contactList.retrieveAll())

const contactList = new ContactList(10)
contactList.insert("Mr Michi", "123-456-7890")

console.log(contactList.get("Mr Michi"))
*/

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.insert("Mr spK", "123-456-0987")
contactList.delete("Mr michi")

console.log(contactList.retrieveAll())
