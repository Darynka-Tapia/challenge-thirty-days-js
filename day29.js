class Mail {
  constructor(from, to, body, subject) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.subject = subject;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    // Tu código aquí 👈🏻
    const newNode = new Mail(from, to, body, subject);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    // Tu código aquí 👈🏻
    if (this.length === 0) {
      throw new Error("La queue está vacía");
    }

    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return {
      from: removedNode.from,
      to: removedNode.to,
      body: removedNode.body,
      subject: removedNode.subject
    };
  }

  peek() {
    // Tu código aquí 👈🏻
    return {
      from: this.last.from,
      to: this.last.to,
      body: this.last.body,
      subject: this.last.subject
    };
  }

  size() {
    // Tu código aquí 👈🏻
    return this.length;
  }
}

const emailQueue = new Queue();

emailQueue.enqueue(
  'jane@ejemplo.com',
  'support@ejemplo.com',
  'No puedo iniciar sesión en mi cuenta',
  'Problema de inicio de sesión'
);

emailQueue.enqueue(
  'joe@ejemplo.com',
  'support@ejemplo.com',
  'Mi pedido no ha llegado todavía',
  'Estado del pedido'
);

console.log(emailQueue.size());