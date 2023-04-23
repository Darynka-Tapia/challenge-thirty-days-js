class Authorization {
  checkAuthorization(user, task) {
    // Tu código aquí 👈
  }
}

class TaskBuilder {
  constructor() {
     // Tu código aquí 👈
  }

  setId(id) {
     // Tu código aquí 👈
  }

  setDescription(description) {
     // Tu código aquí 👈
  }

  setCompleted(completed) {
     // Tu código aquí 👈
  }

  setUsers(users) {
     // Tu código aquí 👈
  }

  setDeadline(deadline) {
     // Tu código aquí 👈
  }

  setPriority(priority) {
     // Tu código aquí 👈
  }

  build() {
     // Tu código aquí 👈
  }
}

class TaskDecorator {
  constructor(task, options) {
     // Tu código aquí 👈
  }

  assignUser(user) {
     // Tu código aquí 👈
  }

  completeTask() {
     // Tu código aquí 👈
  }

  notifyUsers() {
     // Tu código aquí 👈
  }
}

class TaskManager {
  constructor() {
     // Tu código aquí 👈
    this.name = null;
  }
  static getInstance() {
     // Tu código aquí 👈
    if (!TaskManager.instance) {
      // this.name = 'TaskManager';
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task){
     // Tu código aquí 👈
  }

  getTasks(){
     // Tu código aquí 👈
  }

  getTaskById(id){
     // Tu código aquí 👈
  }
}

class User {
  constructor(name) {
     // Tu código aquí 👈
  }

  notify(task) {
     // Tu código aquí 👈
  }
}
class Task{
  constructor(id, description){
     // Tu código aquí 👈
     this.id = id;
     this.description = description;
     this.completed = false;
     this.users = [];
  }

  assignUser(user){
   // Tu código aquí 👈
   
  }

  completeTask() {
     // Tu código aquí 👈
  }

  notifyUsers() {
     // Tu código aquí 👈
  }
}

const taskManager1 = TaskManager.getInstance();
const taskManager2 = TaskManager.getInstance();

console.log(taskManager1 === taskManager2);
